import { useState, useEffect } from 'react'

function Tag({ label }) {
    return (
        <span
            style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fff',
                backgroundColor: 'rgba(0, 180, 216, 0.8)',
                padding: '2px 8px',
                borderRadius: 3,
            }}
        >
            {label}
        </span>
    )
}

function VerticalTimeline({ events, activeIndex = 0 }) {
    const [active, setActive] = useState(activeIndex)

    // Update active when activeIndex changes
    useEffect(() => {
        setActive(activeIndex)
    }, [activeIndex])

    return (
        <section style={{ padding: '96px 0 80px' }}>

            <div style={{ position: 'relative', maxWidth: 760, marginLeft: 'auto', marginRight: 'auto' }}>
                {/* stem */}
                <div
                    style={{
                        position: 'absolute',
                        left: 119,
                        top: 0,
                        bottom: 0,
                        width: 1,
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.15) 100%)',
                    }}
                />

                {events.map((ev, i) => {
                    const isActive = active === i;
                    return (
                        <div
                            key={i}
                            onMouseEnter={() => setActive(i)}
                            onMouseLeave={() => setActive(null)}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '120px 1fr',
                                gap: 0,
                                marginBottom: 48,
                                cursor: 'pointer',
                            }}
                        >
                            {/* date column */}
                            <div style={{ paddingRight: 32, textAlign: 'right', paddingTop: 4, fontFamily: "'League Spartan', sans-serif" }}>
                                <div
                                    style={{
                                        fontSize: 28,
                                        fontWeight: 700,
                                        color: '#ffffff',
                                        transform: isActive ? 'scale(1.08) translateX(-3px)' : 'scale(1) translateX(0)',
                                        transition: 'color 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        lineHeight: 1,
                                    }}
                                >
                                    {ev.year}
                                </div>
                                <div
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 600,
                                        color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
                                        marginTop: 6,
                                        letterSpacing: '0.08em',
                                        transition: 'color 0.3s ease',
                                    }}
                                >
                                    {ev.month}
                                </div>
                            </div>

                            {/* node & card */}
                            <div style={{ position: 'relative' }}>
                                {/* dot node */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: -5,
                                        top: 10,
                                        width: 9,
                                        height: 9,
                                        borderRadius: '50%',
                                        background: isActive ? '#d4a853' : '#232220',
                                        border: '1.5px solid',
                                        borderColor: isActive ? '#d4a853' : 'rgba(255,255,255,0.25)',
                                        transform: isActive ? 'scale(1.4)' : 'scale(1)',
                                        boxShadow: isActive ? '0 0 12px rgba(212, 168, 83, 0.7)' : '0 0 0px transparent',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        zIndex: 1,
                                    }}
                                />

                                {/* card */}
                                <div
                                    style={{
                                        backgroundColor: 'var(--color-persona-card, #0e1326)',
                                        border: '1px solid',
                                        borderColor: isActive ? 'rgba(0, 180, 216, 0.35)' : 'rgba(255, 255, 255, 0.08)',
                                        boxShadow: isActive
                                            ? '0 12px 28px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 180, 216, 0.15)'
                                            : '0 4px 12px rgba(0, 0, 0, 0.2)',
                                        marginLeft: 24,
                                        marginRight: 10,
                                        borderRadius: 12,
                                        overflow: 'hidden',
                                        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                                        transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                                    }}
                                >
                                    {/* Smooth image expansion container */}
                                    <div
                                        style={{
                                            maxHeight: isActive ? 220 : 0,
                                            opacity: isActive ? 1 : 0,
                                            overflow: 'hidden',
                                            transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease, transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                                            transform: isActive ? 'scale(1)' : 'scale(0.97)',
                                            transformOrigin: 'top center',
                                        }}
                                    >
                                        <img
                                            src={ev.img}
                                            alt={ev.title}
                                            style={{
                                                width: '100%',
                                                height: 170,
                                                objectFit: 'cover',
                                                display: 'block',
                                                opacity: 0.9,
                                            }}
                                        />
                                    </div>
                                    <div style={{ padding: '20px 24px', fontFamily: '"League Spartan", "serif"' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                                            <Tag label={ev.tag} />
                                        </div>
                                        <h3
                                            style={{
                                                fontSize: 22,
                                                fontWeight: 600,
                                                margin: '0 0 10px',
                                                color: '#fff',
                                            }}
                                        >
                                            {ev.title}
                                        </h3>
                                        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
                                            {ev.body}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default VerticalTimeline