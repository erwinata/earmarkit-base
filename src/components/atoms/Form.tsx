import React from "react";

interface Props {
  onSubmit: () => void;
}
const Form: React.FC<Props> = (props) => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    props.onSubmit && props.onSubmit();
  };

  return <form onSubmit={onSubmit}>{props.children}</form>;
};

export default Form;
