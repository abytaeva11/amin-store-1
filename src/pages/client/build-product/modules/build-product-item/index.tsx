
export const BuildProductItemModule = ({ picture, title, type, setData }: any) => {
    // const [selectedType, setSelectedType] = useState(types[0].id);
    // const [selectedModel, setSelectedModel] = useState(types[0].models[0].id)

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: "200px" }}>
                {/* <h1 style={{ color: "#fff" }}>{title}</h1>
                <select onChange={(event) => {
                    console.log(event.target.value)
                    setSelectedType(parseInt(event.target.value))
                }}>
                    {types.map((type) => (
                        <option key={type.id} value={type.id}>
                            {type.title}
                        </option>
                    ))}
                </select>
                {icon} */}
            </div>
            <div style={{ display: 'flex', alignItems: "start", gap: "30px" }}>
                {/* <img src={img} alt="typeimg" />
                <ul>
                    {
                        types.map(type => type.id === selectedType && (
                            type.models.map(model => {
                                const isSelected = model.id === selectedModel
                                return (
                                    <ProductModelItem isSelected={isSelected} setSelectedModel={setSelectedModel} model={model} />
                                )
                            })

                        ))
                    }
                </ul> */}
            </div>
        </div>
    );
};


// interface ProductModelItemProps {
//     setSelectedModel: (a: number) => void
//     type: oneOfTypes
//     isSelected: boolean
// }




// const ProductModelItem = ({ setSelectedModel, type, isSelected }: ProductModelItemProps) => {
//     const [quantity, setQuantity] = useState(1);
//     return (
//         <li style={{ display: "flex", cursor: "pointer", alignItems: 'center', gap: "20px" }}
//             onClick={() => setSelectedModel(type)}
//             key={model.id}>
//             <div style={{ display: "flex", alignItems: 'center', gap: "20px" }}>
//                 <div>
//                     <div style={{ width: "20px", height: "20px", background: isSelected ? "#3987c9" : "gray" }} ></div>
//                 </div>
//                 <div>
//                     <h3 style={{ color: '#fff' }}>{model.title}</h3>
//                     <p style={{ color: "#c8c8c8" }}>{model.price}</p>
//                 </div>
//             </div>
//             <div style={{ display: 'flex', alignItems: "center", gap: "20px" }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "24px", color: "#fff" }}>
//                     <button
//                         style={{ width: "20px", height: "20px", background: "none", color: "#fff", fontSize: "24px" }}
//                         onClick={() => setQuantity((prev) => prev - 1)}>-</button>
//                     <p>{quantity}</p>
//                     <button
//                         style={{ width: "20px", height: "20px", background: "none", color: "#fff", fontSize: "24px" }}
//                         onClick={() => setQuantity((prev) => prev + 1)}>+</button>
//                 </div>
//                 <button
//                     style={{ width: '20px', height: "20px", borderRadius: "50%", background: "#c8c8c8" }}>i</button>
//             </div>
//         </li>
//     )
// }