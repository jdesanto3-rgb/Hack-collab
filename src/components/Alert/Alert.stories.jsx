import React, { useState } from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
};

export const Default = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational message for the user.',
  },
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Alert variant="info" title="Info">Something you should know about.</Alert>
      <Alert variant="success" title="Success">Your changes have been saved.</Alert>
      <Alert variant="warning" title="Warning">This action may have side effects.</Alert>
      <Alert variant="error" title="Error">Something went wrong. Please try again.</Alert>
    </div>
  ),
};

export const WithDismiss = {
  render: () => {
    const [dismissed, setDismissed] = React.useState(false);
    if (dismissed) return <span style={{ color: 'var(--text2)', fontSize: 'var(--text-base)' }}>Alert dismissed.</span>;
    return (
      <Alert variant="warning" title="Action Required" onDismiss={() => setDismissed(true)}>
        Please review the updated terms before continuing.
      </Alert>
    );
  },
};

export const NoTitle = {
  args: {
    variant: 'success',
    children: 'Profile updated successfully.',
  },
};
