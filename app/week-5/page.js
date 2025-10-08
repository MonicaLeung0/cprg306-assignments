import NewItemForm from "./new-item";

export default function FormPage() 
{
    return (
        <main className="p-10">
            <h1 className="text-center text-3xl mb-4">New Item Form</h1>
            <NewItemForm />
        </main>
    );
}