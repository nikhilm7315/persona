function Tag({ label }) {
    return (
        <span
            style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fff',
                backgroundColor: 'rgba(155, 93, 232, 0.8)',
                padding: '2px 8px',
                borderRadius: 3,
            }}
        >
            {label}
        </span>
    )
}

export default Tag