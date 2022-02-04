const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};
export const ChildArea = (props) => {
  const { open } = props;
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