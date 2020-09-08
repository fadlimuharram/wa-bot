import handlerXml from './libs/handler-lib-xml';
import WhatsappBot from './controllers/WhatsappBot';

export const hooks = handlerXml(WhatsappBot);
