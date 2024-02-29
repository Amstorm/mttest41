import React from 'react';
import MatterportViewer from '../../components/MatterportViewer'; // Adjust the import path as necessary

const Page: React.FC = () => {
  return (
    <div>
      <h1>Matterport Space Viewer</h1>
      <MatterportViewer sdkKey="xtet8rr5t5i42rwanintd7rzb" spaceId="JGPnGQ6hosj" />
    </div>
  );
};

export default Page;
