
export default function Item({ itemObj })
{
    return (
        <div className="border-2 border-blue-600 rounded p-4 m-3 inline-block">
            <div className="block sm:inline-block sm:ml-4 ">
                <h3 className="text-2xl">{itemObj.name}</h3>
                <p>Quantity: {itemObj.quantity}</p>
            </div>
        </div>
    );
}
