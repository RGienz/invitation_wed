export interface InvitationData {
    name: string;
    code: string;
}
// import '../../reference/image/sageGreen9.png'
export function exportInvitationAsImage(data: InvitationData): void {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1100;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
        alert('Could not generate invitation canvas context.');
        return;
    }

    const bgImage = new Image();
    bgImage.src = new URL('../../reference/image/sageGreen9.png', import.meta.url).href;

    bgImage.onload = () => {
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

        const colorDarkCharcoal = '#1F241C'; 
        const colorPureWhite = '#FFFFFF';    
        const colorSoftWhite = 'rgba(255, 255, 255, 0.85)';
        const centerX = 400;                

        ctx.textAlign = 'left';
        
        ctx.fillStyle = colorSoftWhite;
        ctx.font = 'normal 45px WindSong, cursive, sans-serif';
        ctx.fillText('You are', 120, 180);

        ctx.fillStyle = colorDarkCharcoal; 
        ctx.font = 'normal 90px sans-serif';
        ctx.fillText('INVITED', 120, 270);

        ctx.textAlign = 'center';

        ctx.fillStyle = colorSoftWhite;
        ctx.font = '300 14px sans-serif';
        ctx.fillText('TO CELEBRATE THE WEDDING OF', centerX, 365);
        
        ctx.fillStyle = colorPureWhite;
        
        ctx.font = 'normal 72px WindSong, cursive, sans-serif';
        ctx.fillText('Renz Ross', centerX, 440);
        
        ctx.font = 'normal 48px WindSong, cursive, sans-serif';
        ctx.fillText('&', centerX, 500);
        
        ctx.font = 'normal 72px WindSong, cursive, sans-serif';
        ctx.fillText('Angelica', centerX, 570);

        ctx.textAlign = 'left';
        ctx.fillStyle = colorDarkCharcoal;
        ctx.font = 'bold 130px sans-serif';
        ctx.fillText('XX', 120, 730); 

        ctx.fillStyle = colorPureWhite;
        ctx.font = 'normal 45px WindSong, cursive, sans-serif';
        ctx.fillText('Unknown', 100, 690);

        ctx.textAlign = 'right';
        const textRightX = 700;

        ctx.fillStyle = colorSoftWhite;
        ctx.font = '300 16px sans-serif';
        ctx.fillText('FROM : x:xx xx', textRightX, 645);
        ctx.fillText('Church Wedding At', textRightX, 685);
        ctx.fillText('St. John Paul II Parish', textRightX, 715);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(120, 790);
        ctx.lineTo(700, 790);
        ctx.stroke();

        ctx.textAlign = 'center';

        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '300 14px sans-serif';
        ctx.fillText(`VERIFIED PASS CODE: ${data.code}`, centerX, 845);

        ctx.fillStyle = colorPureWhite;
        ctx.font = '600 22px sans-serif';
        ctx.fillText(data.name.toUpperCase(), centerX, 885);

        ctx.fillStyle = colorDarkCharcoal;
        ctx.font = 'bold 20px sans-serif';
        ctx.fillText('NO PLUS ONE', centerX, 925);

        ctx.fillStyle = colorPureWhite;
        ctx.font = 'normal 38px WindSong, cursive, sans-serif';
        ctx.fillText('We hope to see you there!', centerX, 1005);


        const imageURI = canvas.toDataURL('image/png');
        
        // Download link For invitaion
        // const link = document.createElement('a');
        // link.download = `Wedding_Invitation_${data.code}.png`;
        // link.href = imageURI;
        // link.click();

        // testing view only on new tabs
        const newTab = window.open();
        if (newTab) {
            newTab.document.write(`
                <html>
                    <head>
                        <title>Wedding Invitation - ${data.name}</title>
                        <style>
                            body {
                                margin: 0;
                                background-color: #1a1a1a;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                min-height: 100vh;
                            }
                            img {
                                max-width: 100%;
                                height: auto;
                                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
                            }
                        </style>
                    </head>
                    <body>
                        <img src="${imageURI}" alt="Wedding Invitation" />
                    </body>
                </html>
            `);
            newTab.document.close();
        } else {
            alert('Popup blocked! Please allow popups to view the invitation image.');
        }
    };

    bgImage.onerror = () => {
        alert('Failed to load invitation background texture image asset.');
    };
}