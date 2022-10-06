import Item from "./Item";

const ItemList = ({items}) => {
    
   
    return (
        
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">   
            {items.prod.map((item) => {
                return (
                    <div className="col-md-4" key={item.id}>
                        <Item itemsp={item}></Item>
                        
                    </div>
                    )
                })}
            </div>
        </div>
    )};

export default ItemList
