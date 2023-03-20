const Backdrop = (props) => {
    const onClickBackdropHandler = () => {
        props.onClickBackdrop();
    }

    return ( <div className="absolute bg-[#000000a6] z-10 w-screen h-screen left-0 right-0" onClick={onClickBackdropHandler}>

    </div> );
}
 
export default Backdrop;