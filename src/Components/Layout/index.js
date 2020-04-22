/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styled components
import { LayoutContainer, Title } from "./styles";

// Store
import businessStore from "../../state/business";
import resourcesStore from "../../state/resources";

// components
import NavBar from "../NavBar";
import Content from "../Content";
import LoadingComponent from "../LoadingComponent";

export const Layout = React.memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resourcesStore.actions.fetchAllResources.request());
    dispatch(businessStore.actions.fetchBusiness.request());
  }, [dispatch]);

  const resourcesLoading = useSelector(resourcesStore.selector.selectLoading);
  const businessLoading = useSelector(businessStore.selector.selectLoading);

  return (
    <LayoutContainer>
      {resourcesLoading || businessLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <NavBar />
          <main>
            <Title>Resources</Title>
            <Content />
          </main>
        </>
      )}
    </LayoutContainer>
  );
});

export default Layout;
