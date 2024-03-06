import { obtenerCliente } from "../data/Clientes"
export async function loader({params}){
    const cliente = await obtenerCliente(params.clienteId)
    if(Object.values(cliente).length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "No hay resultados"
        })
    }
    return cliente
}
function EditarCliente() {
    return (
        <div>EditarCliente</div>
    )
}

export default EditarCliente