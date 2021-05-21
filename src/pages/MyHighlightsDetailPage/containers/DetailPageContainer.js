import React from "react";
import { useParams } from "react-router-dom";

import { DetailPage } from "../components";

function DetailPageContainer({ data }) {
  const { id } = useParams();
  const findedData = data.find((_data) => _data.id == id);

  return <DetailPage data={findedData} />;
}

export default DetailPageContainer;
