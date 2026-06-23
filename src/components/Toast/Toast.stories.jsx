import React from 'react';
import { Toast, ToastProvider, useToast } from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export const SingleToast = {
  render: () => (
    <Toast message="This is a notification" variant="default" onClose={() => {}} duration={0} />
  ),
};

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Toast message="Default notification" variant="default" onClose={() => {}} duration={0} />
      <Toast message="Action completed successfully" variant="success" onClose={() => {}} duration={0} />
      <Toast message="Please review before continuing" variant="warning" onClose={() => {}} duration={0} />
      <Toast message="Something went wrong" variant="error" onClose={() => {}} duration={0} />
    </div>
  ),
};

function ToastDemo() {
  const { show } = useToast();
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <button onClick={() => show('Default message', 'default')} style={{ padding: '6px 14px', border: '1px solid var(--border2)', borderRadius: 'var(--radius)', background: 'var(--surface)', cursor: 'pointer' }}>Default</button>
      <button onClick={() => show('Saved successfully!', 'success')} style={{ padding: '6px 14px', border: '1px solid var(--teal)', borderRadius: 'var(--radius)', background: 'var(--teal-light)', color: 'var(--teal)', cursor: 'pointer' }}>Success</button>
      <button onClick={() => show('Check your input', 'warning')} style={{ padding: '6px 14px', border: '1px solid var(--amber)', borderRadius: 'var(--radius)', background: 'var(--amber-light)', color: 'var(--amber)', cursor: 'pointer' }}>Warning</button>
      <button onClick={() => show('Request failed', 'error')} style={{ padding: '6px 14px', border: '1px solid var(--red)', borderRadius: 'var(--radius)', background: 'var(--red-light)', color: 'var(--red)', cursor: 'pointer' }}>Error</button>
    </div>
  );
}

export const WithProvider = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};
