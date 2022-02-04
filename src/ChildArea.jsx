const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};
export const ChildArea = (props) => {
  const { open } = props;
  console.log("ChildArea has rendering")

  const data = [...Array(2000).keys()];
  data.forEach(()=> {
    console.log('...');
  })
  

  return (
    <>
      {open ? (
        <div style={style}>
          <p>child component</p>
        </div>
      ) : null}
    </>
  );
};
