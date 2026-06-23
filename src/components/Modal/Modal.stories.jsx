import React, { useState } from 'react';
import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export const Default = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)} style={{ padding: '8px 16px', background: 'var(--purple)', color: 'var(--surface)', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer' }}>
          Open Modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Dialog Title">
          <p>This is the modal body content. It can contain any React children.</p>
        </Modal>
      </>
    );
  },
};

export const WithFooter = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)} style={{ padding: '8px 16px', background: 'var(--purple)', color: 'var(--surface)', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer' }}>
          Open Modal with Footer
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Confirm Action"
          footer={
            <>
              <button onClick={() => setOpen(false)} style={{ padding: '6px 14px', border: '1px solid var(--border2)', borderRadius: 'var(--radius)', background: 'var(--surface)', cursor: 'pointer', color: 'var(--text)' }}>Cancel</button>
              <button onClick={() => setOpen(false)} style={{ padding: '6px 14px', background: 'var(--purple)', color: 'var(--surface)', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer' }}>Confirm</button>
            </>
          }
        >
          <p>Are you sure you want to perform this action? This cannot be undone.</p>
        </Modal>
      </>
    );
  },
};

export const Small = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)} style={{ padding: '8px 16px', background: 'var(--purple)', color: 'var(--surface)', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer' }}>
          Open Small Modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Small Dialog" size="sm">
          <p>A compact modal for simple confirmations.</p>
        </Modal>
      </>
    );
  },
};

export const Large = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)} style={{ padding: '8px 16px', background: 'var(--purple)', color: 'var(--surface)', border: 'none', borderRadius: 'var(--radius)', cursor: 'pointer' }}>
          Open Large Modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Large Dialog" size="lg">
          <p>A wider modal for richer content — forms, tables, or multi-step flows.</p>
          <p>Scroll is handled inside the body area if content overflows.</p>
        </Modal>
      </>
    );
  },
};
