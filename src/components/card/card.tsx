import "./card.css"

interface CardProps {
    price: number,
    title: string,
    image: string


}

export function Card({ price, title, image }: CardProps) {
    return (
        <div className="card">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>Valor: {price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
        </div>

    );
}
