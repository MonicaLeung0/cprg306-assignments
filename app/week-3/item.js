export default function Item({ name, quantity, category })
{
    return (
        <div className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2 rounded-lg  a">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm">Quantity: {quantity}</p>
            <p className="text-sm" >Category: {category}</p>
        </div>
    );
}