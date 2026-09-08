import { useEffect, useRef, useState } from "react";

function Intro() {
    const [isVisible, setIsVisible] = useState(false);
    const [introDrop, setIntroDrop] = useState(true);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);

    const positionRef = useRef({ x: 0, y: 0 });
    const velocityRef = useRef({ x: 0, y: 0 });
    const dragStartRef = useRef({ x: 0, y: 0 });
    const lastPointerRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef(null);

    const updatePosition = (x, y) => {
        positionRef.current = { x, y };
        setPosition({ x, y });
    };

    // BOUNCY PHYSICS
    const startPhysics = () => {
        cancelAnimationFrame(animationRef.current);

        const animate = () => {
            const current = positionRef.current;
            const velocity = velocityRef.current;

            const spring = 0.055;
            const damping = 0.86;

            velocity.x += -current.x * spring;
            velocity.y += -current.y * spring;

            velocity.x *= damping;
            velocity.y *= damping;

            const nextX = current.x + velocity.x;
            const nextY = current.y + velocity.y;

            if (
                Math.abs(nextX) < 0.15 &&
                Math.abs(nextY) < 0.15 &&
                Math.abs(velocity.x) < 0.15 &&
                Math.abs(velocity.y) < 0.15
            ) {
                velocityRef.current = {
                    x: 0,
                    y: 0,
                };

                updatePosition(0, 0);
                return;
            }

            updatePosition(nextX, nextY);

            animationRef.current =
                requestAnimationFrame(animate);
        };

        animationRef.current =
            requestAnimationFrame(animate);
    };

    // DRAG
    const handlePointerDown = (e) => {
        e.preventDefault();

        cancelAnimationFrame(animationRef.current);

        setDragging(true);

        e.currentTarget.setPointerCapture(e.pointerId);

        dragStartRef.current = {
            x:
                e.clientX -
                positionRef.current.x,

            y:
                e.clientY -
                positionRef.current.y,
        };

        lastPointerRef.current = {
            x: e.clientX,
            y: e.clientY,
        };

        velocityRef.current = {
            x: 0,
            y: 0,
        };
    };

    const handlePointerMove = (e) => {
        if (!dragging) return;

        let x =
            e.clientX -
            dragStartRef.current.x;

        let y =
            e.clientY -
            dragStartRef.current.y;

        // RESPONSIVE DRAG LIMIT
        const isMobile = window.innerWidth < 768;

        const maxX = isMobile ? 90 : 220;
        const maxY = isMobile ? 280 : 500;

        // Resistensi horizontal
        if (Math.abs(x) > maxX) {
            const extra =
                Math.abs(x) - maxX;

            x =
                Math.sign(x) *
                (maxX + extra * 0.2);
        }

        // Resistensi vertical
        if (y > maxY) {
            const extra = y - maxY;

            y =
                maxY +
                extra * 0.15;
        }

        if (y < -80) {
            y = -80;
        }

        velocityRef.current = {
            x:
                (e.clientX -
                    lastPointerRef.current.x) *
                0.8,

            y:
                (e.clientY -
                    lastPointerRef.current.y) *
                0.8,
        };

        lastPointerRef.current = {
            x: e.clientX,
            y: e.clientY,
        };

        updatePosition(x, y);
    };

    const handlePointerUp = (e) => {
        if (!dragging) return;

        setDragging(false);

        try {
            e.currentTarget.releasePointerCapture(
                e.pointerId
            );
        } catch { }

        startPhysics();
    };

    const handleDoubleClick = () => {
        cancelAnimationFrame(
            animationRef.current
        );

        velocityRef.current = {
            x: 0,
            y: 0,
        };

        updatePosition(0, 0);
    };

    useEffect(() => {
        return () => {
            cancelAnimationFrame(
                animationRef.current
            );
        };
    }, []);

    // LANYARD GEOMETRY
    const anchorX = 195;
    const anchorY = -10;

    const bowY = 140 + position.y;
    const bowX = 195 + position.x;

    const leftStartX = anchorX - 22;
    const rightStartX = anchorX + 22;

    const leftEndX = bowX - 20;
    const rightEndX = bowX + 20;

    const leftControlX =
        (leftStartX + leftEndX) / 2;

    const rightControlX =
        (rightStartX + rightEndX) / 2;

    const controlY =
        Math.max(
            45,
            bowY * 0.55
        );

    const leftPath = `
        M ${leftStartX} ${anchorY}
        C ${leftControlX - 8} ${controlY},
          ${leftControlX - 8} ${bowY - 45},
          ${leftEndX} ${bowY}
    `;

    const rightPath = `
        M ${rightStartX} ${anchorY}
        C ${rightControlX + 8} ${controlY},
          ${rightControlX + 8} ${bowY - 45},
          ${rightEndX} ${bowY}
    `;

    // INTRO ANIMATION
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    // INITIAL DROP
    useEffect(() => {
        let frame;
        let startTime;

        const drop = (time) => {
            if (!startTime) startTime = time;

            const elapsed =
                time - startTime;

            const duration = 1300;

            if (elapsed < duration) {
                const t =
                    elapsed / duration;

                const y =
                    150 *
                    Math.cos(
                        t *
                        Math.PI *
                        1.5
                    ) *
                    Math.pow(
                        1 - t,
                        2
                    );

                const bounce =
                    180 * t;

                const finalY =
                    -180 +
                    bounce +
                    y;

                const swing =
                    Math.sin(
                        t *
                        Math.PI *
                        3
                    ) *
                    18 *
                    Math.pow(
                        1 - t,
                        1.5
                    );

                positionRef.current = {
                    x: swing,
                    y: finalY,
                };

                setPosition({
                    x: swing,
                    y: finalY,
                });

                frame =
                    requestAnimationFrame(
                        drop
                    );
            } else {
                positionRef.current = {
                    x: 0,
                    y: 0,
                };

                setPosition({
                    x: 0,
                    y: 0,
                });

                setIntroDrop(false);
            }
        };

        frame =
            requestAnimationFrame(drop);

        return () =>
            cancelAnimationFrame(frame);
    }, []);

    return (
        <section
            className="
                relative
                flex
                min-h-screen
                items-center
                justify-center
                overflow-hidden
                bg-[#faf7ff]
            "
        >

            {/* BACKGROUND */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-20
                    h-80
                    w-80
                    rounded-full
                    bg-pink-200/25
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    bottom-0
                    h-96
                    w-96
                    rounded-full
                    bg-purple-200/25
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-72
                    w-72
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-blue-100/20
                    blur-3xl
                "
            />

            {/* MAIN */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    flex
                    w-full
                    max-w-6xl
                    flex-col
                    items-center
                    justify-center
                    px-5
                    py-16

                    lg:flex-row
                    lg:justify-between
                    lg:px-10
                    lg:py-5
                "
            >

                {/* PORTFOLIO TITLE */}
                <div
                    className={`
                        relative
                        z-10
                        w-full
                        max-w-[560px]

                        transform
                        transition-all
                        duration-1000
                        ease-out

                        ${isVisible
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-10 opacity-0"
                        }
                    `}
                >
                    <img
                        src="/images/portfolio-title.png"
                        alt="Portfolio"
                        draggable="false"
                        className="
                            mx-auto
                            w-full
                            max-w-[560px]
                            select-none
                            object-contain

                            lg:w-[125%]
                            lg:max-w-none
                        "
                    />
                </div>

                {/* PHOTO AREA */}
                <div
                    className="
                        relative
                        mt-[-20px]
                        h-[520px]
                        w-[300px]
                        shrink-0

                        sm:h-[580px]
                        sm:w-[340px]

                        lg:mt-0
                        lg:h-[650px]
                        lg:w-[390px]
                        lg:translate-x-8
                    "
                >

                    {/* LANYARD */}
                    <svg
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            z-0
                            h-full
                            w-full
                            overflow-visible
                        "
                        viewBox="0 0 390 650"
                        preserveAspectRatio="none"
                    >
                        {/* LEFT */}
                        <path
                            d={leftPath}
                            fill="none"
                            stroke="#e9a0c2"
                            strokeWidth="10"
                            strokeLinecap="round"
                        />

                        <path
                            d={leftPath}
                            fill="none"
                            stroke="#f7c2d9"
                            strokeWidth="3"
                            strokeLinecap="round"
                            opacity="0.8"
                        />

                        {/* RIGHT */}
                        <path
                            d={rightPath}
                            fill="none"
                            stroke="#e8a0c1"
                            strokeWidth="10"
                            strokeLinecap="round"
                        />

                        <path
                            d={rightPath}
                            fill="none"
                            stroke="#f7c2d9"
                            strokeWidth="3"
                            strokeLinecap="round"
                            opacity="0.8"
                        />
                    </svg>

                    {/* DRAGGABLE OBJECT */}
                    <div
                        className="
                            absolute
                            left-1/2
                            top-[-10px]
                            z-10
                            touch-none
                            select-none
                        "
                        style={{
                            transform: `
                                translateX(
                                    calc(
                                        -50% +
                                        ${position.x}px
                                    )
                                )
                                translateY(
                                    ${position.y}px
                                )
                                scale(
                                    ${window.innerWidth < 640
                                    ? 0.72
                                    : window.innerWidth < 1024
                                        ? 0.84
                                        : 1
                                }
                                )
                            `,

                            transformOrigin:
                                "top center",

                            cursor: dragging
                                ? "grabbing"
                                : "grab",
                        }}
                        onPointerDown={
                            handlePointerDown
                        }
                        onPointerMove={
                            handlePointerMove
                        }
                        onPointerUp={
                            handlePointerUp
                        }
                        onPointerCancel={
                            handlePointerUp
                        }
                        onDoubleClick={
                            handleDoubleClick
                        }
                    >
                        {/* SPACE */}
                        <div className="h-[115px] w-[80px]" />

                        {/* BOW */}
                        <div
                            className="
                                relative
                                z-20
                                mx-auto
                                flex
                                h-12
                                w-20
                                items-center
                                justify-center
                            "
                        >
                            {/* LEFT */}
                            <div
                                className="
                                    absolute
                                    left-1
                                    h-9
                                    w-10
                                    rotate-[-18deg]
                                    rounded-[60%_40%_55%_45%]
                                    bg-gradient-to-br
                                    from-[#f3abc9]
                                    to-[#e899bd]
                                    shadow-sm
                                "
                            />

                            {/* RIGHT */}
                            <div
                                className="
                                    absolute
                                    right-1
                                    h-9
                                    w-10
                                    rotate-[18deg]
                                    rounded-[40%_60%_45%_55%]
                                    bg-gradient-to-bl
                                    from-[#f3abc9]
                                    to-[#e899bd]
                                    shadow-sm
                                "
                            />

                            {/* CENTER */}
                            <div
                                className="
                                    relative
                                    z-10
                                    h-5
                                    w-5
                                    rounded-full
                                    bg-[#f6b4cf]
                                    shadow-sm
                                "
                            />

                            {/* HIGHLIGHT */}
                            <div
                                className="
                                    absolute
                                    left-1/2
                                    top-1
                                    h-2
                                    w-8
                                    -translate-x-1/2
                                    rounded-full
                                    bg-white/40
                                "
                            />
                        </div>

                        {/* PHOTO CARD */}
                        <div
                            className="
                                relative
                                z-10
                                mt-[-3px]
                                rotate-[3deg]
                            "
                        >
                            {/* BACKING */}

                            <div
                                className="
                                    absolute
                                    inset-[-7px]
                                    rotate-[-5deg]
                                    rounded-[45%]
                                    bg-[#f4d7e7]/70
                                    shadow-lg
                                "
                            />

                            {/* OVAL FRAME */}

                            <div
                                className="
                                    relative
                                    h-[390px]
                                    w-[295px]
                                    rounded-[48%]
                                    border-[9px]
                                    border-white/90
                                    bg-gradient-to-br
                                    from-[#f6cfe1]
                                    via-[#fff4fa]
                                    to-[#ddd5f4]
                                    p-2
                                    shadow-2xl
                                    shadow-pink-200/50
                                "
                            >
                                {/* PHOTO */}

                                <div
                                    className="
                                        relative
                                        h-full
                                        w-full
                                        overflow-hidden
                                        rounded-[45%]
                                        bg-[#f1dce9]
                                    "
                                >
                                    <img
                                        src="/images/profile-photo.jpeg"
                                        alt="Profile"
                                        draggable="false"
                                        className="
                                            h-full
                                            w-full
                                            select-none
                                            object-cover
                                        "
                                    />

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-pink-200/10
                                            via-transparent
                                            to-white/15
                                        "
                                    />
                                </div>

                                {/* SPARKLES */}

                                <span
                                    className="
                                        absolute
                                        -right-7
                                        top-16
                                        text-xl
                                        text-[#e4a6c4]
                                    "
                                >
                                    ✦
                                </span>

                                <span
                                    className="
                                        absolute
                                        -left-6
                                        bottom-20
                                        text-sm
                                        text-[#bba6e6]
                                    "
                                >
                                    ✧
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* HINT */}
            <div
                className="
                    absolute
                    bottom-6
                    left-1/2
                    -translate-x-1/2
                    text-center
                    sm:bottom-8
                "
            >
                <p
                    className="
                        text-[8px]
                        tracking-[0.25em]
                        text-[#aaa0b5]
                        sm:text-[9px]
                    "
                >
                    DRAG THE PHOTO
                </p>
            </div>
        </section>
    );
}

export default Intro;