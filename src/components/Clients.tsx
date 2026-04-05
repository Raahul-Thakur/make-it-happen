import { useRef, useState, type PointerEvent } from 'react';
import ministryOfShawarmaLogo from '../../content/client_logos/ministry of shawarma .jpg';
import wecityMotorsLogo from '../../content/client_logos/wecity.jpg';
import bunmanIraniCafeLogo from '../../content/client_logos/cafe south soul.jpg';
import waffleBingeLogo from '../../content/client_logos/waffle binge.jpg';
import cravishLogo from '../../content/client_logos/cravish.jpg';
import whiteFrameInteriorsLogo from '../../content/client_logos/white frame.jpg';

type Client = {
  name: string;
  logo: string;
};

type DragPosition = {
  x: number;
  y: number;
};

type DragOffsets = {
  x: number;
  y: number;
};

type DraggableClientCardProps = {
  client: Client;
  index: number;
  position: DragPosition;
  isDragging: boolean;
  zIndex: number;
  onDragStart: (index: number) => void;
  onPositionChange: (index: number, position: DragPosition) => void;
  onDragEnd: () => void;
};

const clients: Client[] = [
  { name: 'Ministry of Shawarma', logo: ministryOfShawarmaLogo },
  { name: 'Wecity Motors', logo: wecityMotorsLogo },
  { name: 'Bunman Irani Cafe', logo: bunmanIraniCafeLogo },
  { name: 'Waffle Binge', logo: waffleBingeLogo },
  { name: 'Cravish', logo: cravishLogo },
  { name: 'White Frame Interiors', logo: whiteFrameInteriorsLogo },
];

const initialPositions: DragPosition[] = [
  { x: -10, y: 0 },
  { x: 8, y: 16 },
  { x: -6, y: -8 },
  { x: 10, y: 6 },
  { x: -12, y: 12 },
  { x: 6, y: -10 },
];

const baseRotations = [-4, 3, -2, 4, -3, 2];

function DraggableClientCard({
  client,
  index,
  position,
  isDragging,
  zIndex,
  onDragStart,
  onPositionChange,
  onDragEnd,
}: DraggableClientCardProps) {
  const offsetsRef = useRef<DragOffsets>({ x: 0, y: 0 });

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    offsetsRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    card.setPointerCapture(event.pointerId);
    onDragStart(index);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) {
      return;
    }

    const parent = event.currentTarget.parentElement;
    if (!parent) {
      return;
    }

    const parentRect = parent.getBoundingClientRect();
    const cardRect = event.currentTarget.getBoundingClientRect();

    const nextX = event.clientX - parentRect.left - offsetsRef.current.x;
    const nextY = event.clientY - parentRect.top - offsetsRef.current.y;

    const maxX = parentRect.width - cardRect.width;
    const maxY = parentRect.height - cardRect.height;

    onPositionChange(index, {
      x: Math.min(Math.max(nextX, -24), Math.max(maxX, 24)),
      y: Math.min(Math.max(nextY, -24), Math.max(maxY, 24)),
    });
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    onDragEnd();
  };

  const rotation = isDragging ? 0 : baseRotations[index % baseRotations.length];

  return (
    <div className="relative h-[270px] w-full sm:h-[290px]">
      <div
        className={`group absolute inset-3 cursor-grab select-none rounded-2xl border border-black/10 bg-white/88 p-6 shadow-[0_18px_50px_rgba(17,17,20,0.08)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-out hover:scale-[1.015] hover:border-[#ff6a1f]/25 hover:shadow-[0_26px_60px_rgba(255,106,31,0.16)] active:cursor-grabbing ${
          isDragging ? 'shadow-[0_34px_80px_rgba(17,17,20,0.18)]' : ''
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) rotate(${rotation}deg) scale(${isDragging ? 1.03 : 1})`,
          zIndex,
          touchAction: 'none',
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(255,106,31,0.08),_transparent_46%)]" />

        <div className="relative flex h-full flex-col items-center justify-center text-center">
          <div className="flex h-28 w-full items-center justify-center rounded-xl bg-[linear-gradient(180deg,_rgba(255,250,245,0.96),_rgba(250,243,236,0.96))] p-5 sm:h-32">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="max-h-full w-auto max-w-full object-contain"
              draggable={false}
              loading="lazy"
            />
          </div>

          <p className="mt-5 max-w-[18ch] text-lg font-semibold leading-tight text-[#111114] sm:text-xl">
            {client.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Clients() {
  const [positions, setPositions] = useState<DragPosition[]>(initialPositions);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [zIndices, setZIndices] = useState<number[]>(clients.map((_, index) => index + 1));

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
    setZIndices((current) => {
      const highestZIndex = Math.max(...current);
      return current.map((value, currentIndex) => (currentIndex === index ? highestZIndex + 1 : value));
    });
  };

  const handlePositionChange = (index: number, nextPosition: DragPosition) => {
    setPositions((current) =>
      current.map((position, currentIndex) => (currentIndex === index ? nextPosition : position))
    );
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <section className="relative py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-12 text-center md:mb-16">
          <p className="eyebrow text-[#b65128]">Trusted By</p>
          <h2 className="display-title mt-4 text-5xl text-[#111114] md:text-7xl">Our Clients</h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.78),_rgba(249,242,234,0.94))] p-5 shadow-[0_28px_80px_rgba(17,17,20,0.08)] md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,106,31,0.1),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(238,203,130,0.18),_transparent_24%)]" />

          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {clients.map((client, index) => (
              <DraggableClientCard
                key={client.name}
                client={client}
                index={index}
                position={positions[index]}
                isDragging={draggingIndex === index}
                zIndex={zIndices[index]}
                onDragStart={handleDragStart}
                onPositionChange={handlePositionChange}
                onDragEnd={handleDragEnd}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
