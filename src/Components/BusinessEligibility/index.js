import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Store
import businessStore from '../../state/business';

// Styled components
import { Table, Row, TableContainer, Title, HeaderRow, Column, TableHeader, Img } from './styles';

// assets
import Checked from '../../utils/assets/icons8-checked-50.png';

// Components

// index = container
// container - dispatch // card - render
const BusinessEligibility = ({ selectedResource }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(businessStore.actions.fetchBusiness.request());
  }, []);

  const { business } = useSelector(businessStore.selector.selectBusiness);
  const [eligibility, setEligibility] = useState(false);

  useEffect(() => {
    const businessEmployees = business.qt_employee_count;
    const minSize = selectedResource?.nr_sizemin;
    const maxSize = selectedResource?.nr_sizemax;

    const minRevenue = selectedResource?.nr_revenuemin;
    const maxRevenue = selectedResource?.nr_revenuemax;

    const businessRevenue = business.nr_revenue;
    const revenueEligibility = minRevenue <= businessRevenue <= maxRevenue;
    const sizeEligibility = minSize <= businessEmployees <= maxSize;

    const eligibility = sizeEligibility || revenueEligibility;

    setEligibility(eligibility);
  }, [eligibility, business, selectedResource]);

  console.log(business);

  return (
    <TableContainer>
      <Table>
        <HeaderRow>
          <TableHeader></TableHeader>
          <TableHeader>Requirement</TableHeader>
          <TableHeader>You</TableHeader>
          <TableHeader>Eligibility</TableHeader>
        </HeaderRow>
        <Row>
          <Title>Deadline</Title>
          <Column></Column>
          <Column></Column>
          {console.log(eligibility)}
          <Column>{eligibility && <Img src={Checked} />}</Column>
        </Row>
        <Row>
          <Title>Location</Title>

          <Column></Column>
          <Column>
            {business.ds_addressline1}, {business.ds_city}, {business.ds_postalcode}
          </Column>
          <Column>{eligibility && <Img src={Checked} />}</Column>
        </Row>
        <Row>
          <Title>Size</Title>

          <Column>
            {selectedResource?.nr_sizemin} - {selectedResource?.nr_sizemax}
          </Column>
          <Column></Column>
          <Column>{eligibility && <Img src={Checked} />}</Column>
        </Row>
        <Row>
          <Title>Revenue</Title>
          <Column>
            ${selectedResource?.nr_revenuemin} - ${selectedResource?.nr_revenuemax}
          </Column>
          <Column>${business.nr_revenue || 0} </Column>
          <Column>{eligibility && <Img src={Checked} />}</Column>
        </Row>
        <Row>
          <Title>Industry</Title>

          <Column>{selectedResource?.cd_industrytype}</Column>
          <Column></Column>
          <Column>{eligibility && <Img src={Checked} />}</Column>
        </Row>
        <Row>
          <Title>Organization</Title>

          <Column></Column>
          <Column></Column>
          <Column>{eligibility && <Img src={Checked} />}</Column>
        </Row>
      </Table>
    </TableContainer>
  );
};

export default BusinessEligibility;
