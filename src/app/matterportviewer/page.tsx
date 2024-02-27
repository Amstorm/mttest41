import React from 'react';
import MatterportViewer from '../../components/MatterportViewer'; // Adjust the import path as necessary

const Page: React.FC = () => {
  return (
    <div>
      <h1>Matterport Space Viewer</h1>
      <MatterportViewer sdkKey="rwtd157qccg7hygpxx29ncrrc" spaceId="ZXCyXEPbdpA" />
    </div>
  );
};

export default Page;
