import { useNavigate } from "react-router-dom"
function Clientes({cliente}) {
    const navigate = useNavigate()
    const {id, nombre, telefono, email, empresa} = cliente

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
            </td>
            <td className="p-6 flex justify-around">
                <button
                type="button"
                className="text-blue-500 hover:text-blue-700 uppercase font-bold"
                onClick={() => navigate(`/clientes/${id}/editar`)}
                >
                    Editar
                </button>
                <button
                type="button"
                className="text-red-500 hover:text-red-700 uppercase font-bold"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Clientes