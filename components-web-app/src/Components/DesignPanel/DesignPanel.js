

export default function DesignPanel(props) {
    const { children } = props;
    return (
        <div className="w-full bg-slate border-t-2 border-b-2 border-white/25 flex-col">
            {children}
            <div className="w-full bg-white flex-col justify-center items-center">
            <svg className="blur">
                <g xmlns="http://www.w3.org/2000/svg" transform="translate(0, 0)"><path d="M144.1 -137.4C187.7 -100.4 224.9 -50.2 233.8 9C242.8 68.1 223.6 136.2 179.9 165.2C136.2 194.2 68.1 184.1 8.5 175.6C-51.1 167.1 -102.3 160.3 -152.3 131.3C-202.3 102.3 -251.1 51.1 -243.3 7.9C-235.4 -35.4 -170.7 -70.7 -120.7 -107.7C-70.7 -144.7 -35.4 -183.4 7.4 -190.8C50.2 -198.2 100.4 -174.4 144.1 -137.4" fill="none" stroke="#000000" stroke-width="6"/></g>
            </svg>
            </div>
        </div>
    )
}