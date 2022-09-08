"use strict";

const CreateNewEmptyRepo = ({ formHandler }) => {
  const { onChange, values } = formHandler;
  return <div className="emptyRepo"></div>;
};

module.exports = CreateNewEmptyRepo;
