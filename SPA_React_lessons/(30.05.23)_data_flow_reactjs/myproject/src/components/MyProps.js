// props/properties: data object that come from another components
function MyProps(props) {
    console.log(props.data) 
    const user = props.data
    return ( 
        <div>
            I will receieve props
            {user.name}
        </div>
     );
}

export default MyProps;