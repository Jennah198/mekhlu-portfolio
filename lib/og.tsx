import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const serifFonts = async () => [
  { name: "Instrument Serif", data: await readFile(join(process.cwd(), "assets/InstrumentSerif-Regular.ttf")), style: "normal" as const, weight: 400 as const },
  { name: "Instrument Serif", data: await readFile(join(process.cwd(), "assets/InstrumentSerif-Italic.ttf")), style: "italic" as const, weight: 400 as const },
];

/** Teal "M" monogram used for the favicon and Apple touch icon. */
export function Monogram({ size }: { size: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0b7a64 0%, #0a5244 60%, #062a24 100%)",
        borderRadius: size * 0.22,
        color: "#f6d48d",
        fontFamily: "Instrument Serif",
        fontStyle: "italic",
        fontSize: size * 0.78,
        lineHeight: 1,
        paddingBottom: size * 0.06,
      }}
    >
      M
    </div>
  );
}
