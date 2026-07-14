interface LogoProps {
  light?: boolean;
  size?: number;
  showTagline?: boolean;
}

export default function Logo({ light = false, size = 30, showTagline = false }: LogoProps) {
  const shapeColor = light ? '#F1EEE3' : '#29342A';
  // the eye is a tiny punch-through dot, so it should match whatever surface the logo sits on
  const eyeColor = light ? '#29342A' : '#FCFAF5';
  const wordColor = light ? '#F1EEE3' : '#29342A';
  const goldColor = '#C69A55';
  const iconWidth = size * (260 / 235);
  const iconHeight = size;

  return (
    <div className="flex items-center gap-2.5">
      <span className="relative flex-shrink-0" style={{ width: iconWidth, height: iconHeight }}>
        <span
          className="anima-glow"
          style={{
            width: size,
            height: size,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <svg
          width={iconWidth}
          height={iconHeight}
          viewBox="0 0 260 235"
          fill="none"
          className="relative z-[1]"
        >
          {/* Single silhouette: the "A" frame's right leg carries the dog head profile */}
          <path
            d="M 130 30 Q 133 30 135 34 L 75 163 Q 78 172 86 168 Q 90 160 94 153
               C 100 145 106 136 112 128 C 113 122 114 116 115 110 C 117 104 120 99 123 95
               Q 127 90 131 89 Q 138 87 144 89 Q 149 90 151 92 Q 154 95 156 100
               Q 165 103 173 105 Q 173 110 171 114 Q 169 118 165 120 Q 156 121 149 122
               Q 146 124 146 127 C 145 131 145 136 146 140 C 148 147 152 153 154 160
               Q 156 172 152 181 Q 160 180 168 178 L 192 168 Q 196 166 199 163 L 130 30 Z"
            fill={shapeColor}
            stroke={shapeColor}
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <circle cx="150" cy="101" r="2.4" fill={eyeColor} />
          {/* Gold arc beneath the mark */}
          <path d="M50 198 Q137 216 210 198" stroke={goldColor} strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="48" cy="199" r="2.2" fill={goldColor} />
          <circle cx="212" cy="199" r="2.2" fill={goldColor} />
        </svg>
      </span>
      <div className="flex flex-col">
        <span
          className="font-serif text-[21px] font-semibold tracking-tight"
          style={{ color: wordColor, fontFamily: "'Fraunces', serif" }}
        >
          AnimaVet
        </span>
        {showTagline && (
          <span
            className="text-[10px] tracking-[0.14em] uppercase"
            style={{ color: goldColor }}
          >
            • забота до последнего момента •
          </span>
        )}
      </div>
    </div>
  );
}
