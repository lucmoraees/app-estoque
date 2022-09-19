import { ReactElement } from 'react';

const Loading = (): ReactElement => (
  <div id="loading" className="d-flex-none">
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000000,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(85, 85, 85, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="text-center"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          fontSize: 16,
          backgroundColor: '#fff',
          padding: '5px 20px',
          borderRadius: 8,
          boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="spinner-border spinner-border-sm">
          <span className="sr-only">Loading...</span>
        </div>
        <span>
          Aguarde...
        </span>
      </div>
    </div>
  </div>
);

export default Loading;
