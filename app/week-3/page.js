import ItemList from "./item-list";

export default function Page({ items }) {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-6">
                Shopping List
            </h1>
            <ItemList />
         
        </div>
       
    );
}