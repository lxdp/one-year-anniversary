'use client';

import type { CSSProperties } from 'react';

interface RunningBrainProps {
  /** Freezes the run and plays the caught reaction. */
  isCaught: boolean;
  onCatch: () => void;
}

interface BurstPiece {
  emoji: string;
  tx: string;
  ty: string;
  size: number;
  delaySeconds: number;
}

const BURST_PIECES: BurstPiece[] = [
  { emoji: '💗', tx: '-64px', ty: '-70px', size: 30, delaySeconds: 0 },
  { emoji: '✨', tx: '70px', ty: '-58px', size: 26, delaySeconds: 0.05 },
  { emoji: '💕', tx: '-70px', ty: '20px', size: 24, delaySeconds: 0.1 },
  { emoji: '💖', tx: '80px', ty: '24px', size: 28, delaySeconds: 0.02 },
  { emoji: '🌸', tx: '0px', ty: '-88px', size: 26, delaySeconds: 0.12 },
  { emoji: '✨', tx: '36px', ty: '-84px', size: 22, delaySeconds: 0.16 },
];

/**
 * The cartoon brain that sprints across the welcome screen. Dumb by
 * design: whether it has been caught, and what happens next, belong
 * to the caller.
 */
export function RunningBrain({ isCaught, onCatch }: RunningBrainProps) {
  return (
    <div
      className="brain-runner absolute left-0 top-[62%] -mt-[118px]"
      style={isCaught ? { animationPlayState: 'paused' } : undefined}
    >
      <div className="brain-bob">
        <button
          type="button"
          aria-label="Catch the brain"
          onClick={onCatch}
          className="relative block h-[210px] w-[172px] cursor-pointer rounded-[40%] outline-none focus-visible:ring-4 focus-visible:ring-[#E85C88]/40"
        >
          <div className={`relative h-full w-full ${isCaught ? 'brain-pop' : ''}`}>
            {/* back arm */}
            <div className="arm-swing-b absolute left-[8px] top-[104px] z-[1] h-[46px] w-[14px] origin-top rounded-[8px] bg-[#E85C88]">
              <div className="absolute -bottom-1.5 -left-0.5 h-[18px] w-[18px] rounded-full bg-[#E85C88]" />
            </div>

            {/* legs */}
            <div className="leg-swing-b absolute left-[64px] top-[150px] z-[1] h-[44px] w-[15px] origin-top rounded-[8px] bg-[#E85C88]">
              <div className="absolute -bottom-1 -left-1.5 h-[14px] w-[26px] rounded-[10px] bg-[#C24C74]" />
            </div>
            <div className="leg-swing-a absolute left-[92px] top-[150px] z-[1] h-[44px] w-[15px] origin-top rounded-[8px] bg-[#FF8FB1]">
              <div className="absolute -bottom-1 -left-1.5 h-[14px] w-[26px] rounded-[10px] bg-[#E85C88]" />
            </div>

            {/* body */}
            <div
              className="absolute left-[6px] top-0 z-[2] h-[158px] w-[160px]"
              style={{
                background:
                  'radial-gradient(70% 65% at 38% 32%, #FFC2D6 0%, #FF8FB1 46%, #E85C88 100%)',
                borderRadius: '50% 50% 46% 54% / 56% 58% 44% 42%',
                boxShadow:
                  'inset -8px -12px 16px rgba(150, 50, 90, 0.2), 0 16px 30px rgba(180, 60, 100, 0.22)',
              }}
            >
              {/* brain folds */}
              <svg
                viewBox="0 0 160 158"
                width="160"
                height="158"
                className="absolute inset-0 overflow-visible"
                aria-hidden
              >
                <g
                  fill="none"
                  stroke="#C24C74"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.5"
                >
                  <path d="M42 44 q16 -14 30 2 q14 16 30 0" />
                  <path d="M30 78 q20 -12 40 4" />
                  <path d="M96 84 q18 -14 34 2" />
                  <path d="M40 112 q22 16 44 -2" />
                </g>
              </svg>

              {/* eyes */}
              <div className="absolute left-[74px] top-[52px] h-[34px] w-[34px] rounded-full bg-white shadow-[inset_0_0_0_2px_rgba(150,50,90,0.12)]">
                <div className="absolute left-[12px] top-[8px] h-4 w-4 rounded-full bg-[#3A2A33]">
                  <div className="absolute left-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-white" />
                </div>
              </div>
              <div className="absolute left-[112px] top-[50px] h-8 w-8 rounded-full bg-white shadow-[inset_0_0_0_2px_rgba(150,50,90,0.12)]">
                <div className="absolute left-[11px] top-[7px] h-[15px] w-[15px] rounded-full bg-[#3A2A33]">
                  <div className="absolute left-0.5 top-0.5 h-[5px] w-[5px] rounded-full bg-white" />
                </div>
              </div>

              {/* cheeks */}
              <div className="absolute left-[70px] top-[88px] h-3 w-5 rounded-full bg-[rgba(255,120,150,0.5)]" />
              <div className="absolute left-[124px] top-[86px] h-[11px] w-[18px] rounded-full bg-[rgba(255,120,150,0.5)]" />

              {/* happy mouth */}
              <div className="absolute left-[96px] top-[92px] h-4 w-[30px] overflow-hidden rounded-b-2xl bg-[#7A2740]">
                <div className="absolute -bottom-1 left-1/2 h-2.5 w-4 -translate-x-1/2 rounded-full bg-[#FF6F8E]" />
              </div>
            </div>

            {/* front arm */}
            <div className="arm-swing-a absolute left-[132px] top-[104px] z-[3] h-[46px] w-[14px] origin-top rounded-[8px] bg-[#FF8FB1]">
              <div className="absolute -bottom-1.5 -left-0.5 h-[18px] w-[18px] rounded-full bg-[#FF8FB1]" />
            </div>

            {/* caught: hearts burst outward */}
            {isCaught && (
              <div className="pointer-events-none absolute left-[80px] top-[70px] z-[5]">
                {BURST_PIECES.map((piece, index) => (
                  <span
                    key={`${piece.emoji}-${index}`}
                    className="burst-piece absolute"
                    style={
                      {
                        fontSize: piece.size,
                        animationDelay: `${piece.delaySeconds}s`,
                        // Cast: --tx/--ty custom properties are not in
                        // CSSProperties but drive the burst keyframes.
                        '--tx': piece.tx,
                        '--ty': piece.ty,
                      } as CSSProperties
                    }
                  >
                    {piece.emoji}
                  </span>
                ))}
              </div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
