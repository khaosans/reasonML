[@react.component]
let make = (~userName, ~password: string) => {
  let (password, setPassword) = React.useState(() => password);
  let (userName, setUserName) = React.useState(() => userName);
  let focus = event => ReactEvent.Focus.target(event)##select();

  React.useEffect1(
    () => {
      setUserName(_ => userName);
      setPassword(_ => password);
      None;
    },
    [|userName, password|],
  );

  <form>
    <input
      id="userName"
      onFocus=focus
      onChange={event =>
        setUserName(_ => event->ReactEvent.Form.target##userName)
      }
      value=userName
    />
    <input
      id="password"
      value=password
      onFocus=focus
      onChange={event =>
        setPassword(_ => event->ReactEvent.Form.target##password)
      }
    />
  </form>;
  /*<button onClick={
    [|userName, password|]}, >
     {React.string("save")} </button>*/
};