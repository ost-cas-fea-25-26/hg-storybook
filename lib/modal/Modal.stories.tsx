import { Button } from '@/index.ts';
import Modal, { ModalAction } from '@/modal/Modal.tsx';
import { Meta, StoryObj } from '@storybook/react-vite';
import React, { useMemo } from 'react';
import { useState } from 'react';

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: 'Simple Sample Modal',
    onClose: () => {},
    children: <div>This is a simple placeholder text to display a modal component without anything else in it</div>,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
      <>
        <Button size={'medium'} variant={'gradient'} onClick={() => setShowModal(true)}>
          Open Modal
        </Button>
        {showModal && <Modal {...args} onClose={() => setShowModal(false)}></Modal>}
      </>
    );
  },
};

export const AsyncAction: Story = {
  args: {
    title: 'Async Action Modal',
    onClose: () => {},
    children: <></>,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

    const actions: ModalAction<void>[] = useMemo(
      () => [
        {
          text: 'Speichern',
          variant: 'primary',
          action: () => {
            setShowSuccessMessage(false);
            return new Promise<void>((resolve) => {
              setTimeout(() => {
                resolve();
              }, 1500);
            });
          },
          onSuccess: () => {
            setShowSuccessMessage(true);
          },
        },
      ],
      []
    );

    return (
      <>
        <Button size={'medium'} variant={'gradient'} onClick={() => setShowModal(true)}>
          Open Modal
        </Button>
        {showModal && (
          <Modal {...args} actions={actions} onClose={() => setShowModal(false)}>
            {showSuccessMessage && <div className={'text-green-500'}>Einstellungen erfolgreich gespeichert!!</div>}
            <span>Klicken sie auf den Button um ihre Einstellungen zu speichern</span>
          </Modal>
        )}
      </>
    );
  },
};

export const AsyncActionWithError: Story = {
  args: {
    title: 'Async Action Error',
    onClose: () => {},
    children: <></>,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

    const actions: ModalAction<void>[] = useMemo(
      () => [
        {
          text: 'Speichern',
          variant: 'primary',
          action: () => {
            setShowErrorMessage(false);
            return new Promise<void>((_, reject) => {
              setTimeout(() => {
                reject();
              }, 1500);
            });
          },
          onError: () => {
            setShowErrorMessage(true);
          },
        },
      ],
      []
    );

    return (
      <>
        <Button size={'medium'} variant={'gradient'} onClick={() => setShowModal(true)}>
          Open Modal
        </Button>
        {showModal && (
          <Modal {...args} actions={actions} onClose={() => setShowModal(false)}>
            {showErrorMessage && <div className={'text-red-500'}>Einstellungen konnten nicht gespeichert werden!!</div>}
            <span>Klicken sie auf den Button um ihre Einstellungen zu speichern</span>
          </Modal>
        )}
      </>
    );
  },
};

type SampleResponseType = {
  status: number;
  body: {
    id: string;
    name: string;
    value: Object;
  };
};

export const TypedAsyncAction: Story = {
  args: {
    title: 'Typed Action Error',
    onClose: () => {},
    children: <></>,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [data, setData] = useState<SampleResponseType | null>(null);
    const actions: ModalAction<SampleResponseType>[] = useMemo(
      () => [
        {
          text: 'Speichern',
          variant: 'primary',
          action: () => {
            return new Promise<SampleResponseType>((resolve) => {
              const sampleResponse: SampleResponseType = {
                status: 200,
                body: {
                  id: '079',
                  name: 'Patrick',
                  value: {},
                },
              };
              setTimeout(() => {
                resolve(sampleResponse);
              }, 1500);
            });
          },
          onSuccess: (result) => {
            setData(result);
            setShowModal(false);
          },
        },
      ],
      []
    );

    return (
      <>
        <Button size={'medium'} variant={'gradient'} onClick={() => setShowModal(true)}>
          Open Modal
        </Button>
        {data && (
          <>
            <span>Result:</span>
            <span>{JSON.stringify(data, null, 2)}</span>
          </>
        )}
        {showModal && (
          <Modal<SampleResponseType> {...args} actions={actions} onClose={() => setShowModal(false)}>
            <span>Klicken sie auf den Button um ihre Einstellungen zu speichern</span>
          </Modal>
        )}
      </>
    );
  },
};

export const MultiAction: Story = {
  args: {
    title: 'Multi Action Modal',
    onClose: () => {},
    children: <></>,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const actions: ModalAction<void>[] = useMemo(
      () => [
        {
          text: 'Bestätigen',
          variant: 'primary',
          action: () => {
            setShowModal(false);
            setMessage('Bestätigt');
          },
        },
        {
          text: 'Abbrechen',
          variant: 'secondary',
          action: () => {
            setShowModal(false);
            setMessage('Abgebrochen');
          },
        },
      ],
      []
    );

    return (
      <>
        <Button size={'medium'} variant={'gradient'} onClick={() => setShowModal(true)}>
          Open Modal
        </Button>
        {message}
        {showModal && (
          <Modal {...args} actions={actions} onOpen={() => setMessage('')} onClose={() => setShowModal(false)}>
            <span>Bestätigen Sie das Modal wenn Sie wollen</span>
          </Modal>
        )}
      </>
    );
  },
};
