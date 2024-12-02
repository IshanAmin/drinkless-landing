const MotivationalTiles = () => {
  const tiles = [
    {
      src: "/lovable-uploads/72f68afc-389c-4e4f-9cd6-ae3875938caf.png",
      alt: "Scrabble tiles spelling YES YOU CAN",
      text: "YES YOU CAN"
    },
    {
      src: "/lovable-uploads/900358d8-fd7d-4564-8bcc-b33c229c5d96.png",
      alt: "Scrabble tiles spelling IF NOT NOW WHEN",
      text: "IF NOT NOW WHEN"
    },
    {
      src: "/lovable-uploads/ee84d0eb-883d-4553-be8c-3395e010c74a.png",
      alt: "Scrabble tiles spelling STOP MAKING EXCUSES",
      text: "STOP MAKING EXCUSES"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiles.map((tile, index) => (
            <div 
              key={index}
              className="flex flex-col items-center space-y-4 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <img
                src={tile.src}
                alt={tile.alt}
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md"
              />
              <p className="text-lg font-semibold text-slate-700">{tile.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotivationalTiles;