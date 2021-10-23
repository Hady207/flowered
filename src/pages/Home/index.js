import React, { useEffect } from "react";
import * as ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { HomeActions } from "./reducer";
import homeSelectors from "./selectors";
import { useHistory } from "react-router-dom";
import EyeButton from "../../components/EyeButton";
// import Popup from "../../components/Popup";

const Home = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { homeData, homeIsLoading } = useSelector(homeSelectors);

  useEffect(() => {
    dispatch(HomeActions.requestHomeData());
  }, [dispatch]);

  const handleDataSelect = (Alpha2Code) => {
    dispatch(HomeActions.selectHomeData(Alpha2Code));
    history.push("/details");
  };

  const cellAction = (args) => {
    // if (args.column.field === "name.common") {
    //   ReactDOM.render(
    //     <Popup
    //       onClick={() => handleDataSelect(args?.data?.cca2)}
    //       name={args?.data?.name}
    //     />,
    //     args.cell
    //   );
    // }
    if (args.column.field === "action") {
      ReactDOM.render(
        <EyeButton onClick={() => handleDataSelect(args?.data?.cca2)} />,
        args.cell
      );
    }
  };

  return (
    <section>
      {homeIsLoading ? (
        <div className="loading">
          <h4 className="loading__text">Loading...</h4>
        </div>
      ) : (
        <>
          <GridComponent
            dataSource={homeData}
            allowPaging={true}
            pageSettings={7}
            queryCellInfo={cellAction}
          >
            <ColumnsDirective>
              <ColumnDirective
                field="cca2"
                headerText="Alpha2Code"
                width="100"
              />
              <ColumnDirective
                field="name.common"
                headerText="Name"
                width="100"
              />
              <ColumnDirective
                field="Capital"
                headerText="capital"
                width="100"
              />
              <ColumnDirective field="action" headerText="Action" width="100" />
            </ColumnsDirective>
            <Inject services={[Page]} />
          </GridComponent>
        </>
      )}
    </section>
  );
};

export default Home;
