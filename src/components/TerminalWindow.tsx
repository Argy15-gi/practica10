import React from 'react';

const TerminalWindow = () => {
  const lines = ['iniciando_sistema_seguridad...', 'cargando_modulos_proteccion...', 'acceso_concedido', 'bienvenido_al_portal_de_ciberseguridad'];

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span></span><span></span><span></span>
        </div>
        <span className="terminal-title">root@blackcat:~</span>
      </div>
      <div className="terminal-body">
        {lines.map((line, i) => (
          <p key={i} className={i === lines.length - 1 ? 'typing-line' : ''}>
            <span className="prompt">$</span> {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TerminalWindow;
