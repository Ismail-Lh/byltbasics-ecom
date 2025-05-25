import { Button } from "@/ui/components/global";
import Image from "next/image";

import classes from "./styles.module.scss";

interface ProductCollectionCardProps {
  collection: string;
  imgUrl: string;
  route: string;
}

export function ProductCollectionCard({
  collection,
  imgUrl,
  route,
}: ProductCollectionCardProps) {
  return (
    <div className={classes.card}>
      <Image src={imgUrl} alt={collection} height={250} width={297.5} />

      <div className={classes.card__content}>
        <h3>{collection}</h3>

        <Button route={route} color="white">
          shop now
        </Button>
      </div>
    </div>
  );
}
