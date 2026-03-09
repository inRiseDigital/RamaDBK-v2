import PaymentController from './PaymentController'
import SparePartsController from './SparePartsController'
import StockListController from './StockListController'
import ServicesController from './ServicesController'
import ContactController from './ContactController'
import Settings from './Settings'
const Controllers = {
    PaymentController: Object.assign(PaymentController, PaymentController),
SparePartsController: Object.assign(SparePartsController, SparePartsController),
StockListController: Object.assign(StockListController, StockListController),
ServicesController: Object.assign(ServicesController, ServicesController),
ContactController: Object.assign(ContactController, ContactController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers