import React from "react";
import { useSelector } from "react-redux";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
} from "@syncfusion/ej2-react-grids";
import homeSelectors from "../Home/selectors";

const Details = () => {
  const { homeIsLoading, selectedData } = useSelector(homeSelectors);
  // const lngKeys = Object?.keys(selectedData?.langauges);
  // console.log({ lngKeys });

  return (
    <section>
      {homeIsLoading ? (
        <h4>loading...</h4>
      ) : (
        <>
          <GridComponent dataSource={selectedData}>
            <ColumnsDirective>
              <ColumnDirective field="cca2" headerText="Alpha2Code" />
              <ColumnDirective field="cca3" headerText="Alpha3Code" />
              <ColumnDirective
                field="name.common"
                headerText="Official name in english"
              />
              <ColumnDirective
                field="name.official"
                headerText="Official name in english"
              />
              <ColumnDirective field="capital" headerText="capital" />
              <ColumnDirective field="region" headerText="region" />
              <ColumnDirective field="currencies" headerText="currencies" />
              <ColumnDirective field="flag" headerText="currencies" />
            </ColumnsDirective>
            <Inject services={[Page]} />
          </GridComponent>
        </>
      )}
    </section>
  );
};

export default Details;
