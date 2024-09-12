import { useCheckouStore } from "@/stores/checkout-store";
import { Button } from "../ui/button";
import Link from "next/link";

export const StepFinish = () => {
  const { name } = useCheckouStore((state) => state);

  const message = "Oi";
  const linkZap = `${process.env.NEXT_PUBLIC_ZAP}`;
  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso WhatsApp para concluir. Nosso atendente
        irá te guiar sobre o andamento do pedido.
      </p>
      <Button>
        <Link target="_blank" href={linkZap}>
          {" "}
          Enviar para o WhatsApp
        </Link>
      </Button>
    </div>
  );
};
