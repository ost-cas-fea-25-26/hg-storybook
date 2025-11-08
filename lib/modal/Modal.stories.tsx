import { Button } from '@/index.ts';
import FileInput from '@/input/dragAndDrop/FileInput.tsx';
import Modal, { ModalAction } from '@/modal/Modal.tsx';
import { Meta, StoryObj } from '@storybook/react-vite';
import React, { useMemo, useState } from 'react';
import { expect, waitFor, within } from 'storybook/test';

const meta = {
  component: Modal,
  parameters: {
    controls: {
      exclude: ['data-testid', 'children', 'onClose', 'onOpen', 'actions'],
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: 'Simple Sample Modal',
    onClose: () => {},
    children: <div>This is a simple placeholder text to display a modal component without anything else in it</div>,
    'data-testid': 'sampleModal',
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
      <>
        <Button size={'medium'} background={'gradient'} onClick={() => setShowModal(true)}>
          Open Modal
        </Button>
        {showModal && <Modal {...args} onClose={() => setShowModal(false)}></Modal>}
      </>
    );
  },
  play: async ({ canvasElement, userEvent }) => {
    const document = within(canvasElement.parentNode as HTMLElement);
    const button = document.getByRole('button', { name: 'Open Modal' });
    await userEvent.click(button);
    await expect(await document.findByText('Simple Sample Modal')).toBeVisible();
    const closeButton = await document.findByTestId('sampleModal-close-button');
    await userEvent.click(closeButton);
  },
};

export const AsyncAction: Story = {
  args: {
    title: 'Async Action Modal',
    onClose: () => {},
    children: <></>,
    'data-testid': 'sampleModal',
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

    const actions: ModalAction<void>[] = useMemo(
      () => [
        {
          text: 'Speichern',
          button: {
            background: 'primary',
            textColor: 'white',
          },
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
        <Button size={'medium'} background={'gradient'} onClick={() => setShowModal(true)}>
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
  play: async ({ canvasElement, userEvent }) => {
    const document = within(canvasElement.parentNode as HTMLElement);
    const openButton = document.getByRole('button', { name: 'Open Modal' });
    await userEvent.click(openButton);
    await expect(await document.findByText('Async Action Modal')).toBeVisible();
    const saveButton = await document.findByText('Speichern');
    await userEvent.click(saveButton);
    await waitFor(
      async () => expect(await document.findByText('Einstellungen erfolgreich gespeichert!!')).toBeVisible(),
      { timeout: 5000 }
    );
    const closeButton = await document.findByTestId('sampleModal-close-button');
    await userEvent.click(closeButton);
  },
};

export const AsyncActionWithError: Story = {
  args: {
    title: 'Async Action Error',
    onClose: () => {},
    children: <></>,
    'data-testid': 'sampleModal',
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

    const actions: ModalAction<void>[] = useMemo(
      () => [
        {
          text: 'Speichern',
          button: {
            background: 'primary',
            textColor: 'white',
          },
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
        <Button size={'medium'} background={'gradient'} onClick={() => setShowModal(true)}>
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
  play: async ({ canvasElement, userEvent }) => {
    const document = within(canvasElement.parentNode as HTMLElement);
    const openButton = document.getByRole('button', { name: 'Open Modal' });
    await userEvent.click(openButton);
    await expect(await document.findByText('Async Action Error')).toBeVisible();
    const saveButton = await document.findByText('Speichern');
    await userEvent.click(saveButton);
    await waitFor(
      async () => expect(await document.findByText('Einstellungen konnten nicht gespeichert werden!!')).toBeVisible(),
      { timeout: 5000 }
    );
    const closeButton = await document.findByTestId('sampleModal-close-button');
    await userEvent.click(closeButton);
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
    'data-testid': 'sampleModal',
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [data, setData] = useState<SampleResponseType | null>(null);
    const actions: ModalAction<SampleResponseType>[] = useMemo(
      () => [
        {
          text: 'Speichern',
          button: {
            background: 'primary',
            textColor: 'white',
          },
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
        <Button size={'medium'} background={'gradient'} onClick={() => setShowModal(true)}>
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
    'data-testid': 'sampleModal',
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const actions: ModalAction<void>[] = useMemo(
      () => [
        {
          text: 'Bestätigen',
          button: {
            background: 'primary',
            textColor: 'white',
          },
          action: () => {
            setShowModal(false);
            setMessage('Bestätigt');
          },
        },
        {
          text: 'Abbrechen',
          button: {
            background: 'secondary',
            textColor: 'white',
          },
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
        <Button size={'medium'} background={'gradient'} onClick={() => setShowModal(true)}>
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
  play: async ({ canvasElement, userEvent }) => {
    const document = within(canvasElement.parentNode as HTMLElement);
    const openButton = document.getByRole('button', { name: 'Open Modal' });
    await userEvent.click(openButton);
    const header = await document.findByText('Multi Action Modal');
    await expect(header).toBeVisible();
    const closeButton = await document.findByTestId('sampleModal-close-button');
    await userEvent.click(closeButton);
    await expect(header).not.toBeVisible();
  },
};

export const FileUploadModal: Story = {
  args: {
    title: 'Laden Sie hier eine Datei hoch',
    onClose: () => {},
    children: <></>,
  },
  render: (args) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [files, setFiles] = useState<File[]>([]);

    const actions: ModalAction[] = [
      {
        text: 'Bestätigen',
        button: {
          background: 'white',
          textColor: 'secondary',
        },
        disabled: files.length === 0,
        action: () => {
          setShowModal(false);
        },
      },
    ];

    return (
      <>
        <Button size={'medium'} background={'primary'} textColor={'white'} onClick={() => setShowModal(true)}>
          Open Modal
        </Button>
        {files.map((f) => (
          <div key={f.name}>{f.name}</div>
        ))}
        {showModal && (
          <Modal {...args} onClose={() => setShowModal(false)} actions={actions}>
            <FileInput
              label={'Drag and Drop here'}
              description={'alles erlaubt'}
              size={'large'}
              onDrop={setFiles}
              files={files}
              setFiles={setFiles}
            />
          </Modal>
        )}
      </>
    );
  },
};
