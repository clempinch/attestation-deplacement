import React from 'react';
import './GenerationButton.css';
import pdfBase from './certificate.pdf'
import { generatePdf } from './pdf-util'

class GenerationButton extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        const label = this.props.label;
        const userSettings = this.props.userSettings;
        const reason = this.props.reason;
        return (
            <button className="generate" onClick={_ => this.generate(userSettings, reason)}>{label}</button>
        );
    }

    async generate(userSettings, reason) {
        const creationInstant = new Date()
        const creationHour = creationInstant
            .toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        const creationDate = creationInstant.toLocaleDateString('fr-FR').replace('_', '/');

        const profile = { ...userSettings, datesortie: creationDate, heuresortie: creationHour };

        const pdf = await generatePdf(profile, reason, pdfBase);

        this.downloadBlob(pdf, `attestation-${creationInstant.toLocaleDateString('fr-CA')}_${creationHour.replace(':', '-')}.pdf`)
    }

    downloadBlob(blob, fileName) {
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
        link.href = url
        link.download = fileName
        document.body.appendChild(link)
        link.click()
    }
}

export default GenerationButton;