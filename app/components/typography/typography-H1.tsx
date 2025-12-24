export function TypographyH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className='scroll-m-20 text-center text-3xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight'>
      {children}
    </h1>
  );
}
