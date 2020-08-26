'use strict';

const SALES_QUEUE_DROPDOWN = [
  {
    label: 'Route',
    displayLabel: true,
    name: 'Route',
    image: 'assets/images/route-invoice.png',
    dataKey: 'quick-route',
    disabled: false
  },
  {
    label: 'Approve',
    displayLabel: true,
    name: 'Approve',
    image: 'assets/images/approve-invoice-menu.png',
    dataKey: 'quick-approve',
    disabled: false
  },
  {
    label: 'Place On Hold',
    displayLabel: true,
    name: 'Place On Hold',
    image: 'assets/images/on-hold.png',
    dataKey: 'place_on_hold',
    disabled: false
  },
  {
    label: 'Decline',
    displayLabel: true,
    name: 'Decline',
    image: 'assets/images/deny-invoice.png',
    dataKey: 'quick-decline',
    disabled: false
  }
];

const DISTRIBUTION_QUEUE_DROPDOWN = [
  {
    label: 'Print',
    displayLabel: true,
    name: 'Print',
    image: 'assets/images/print-invoice-black.png',
    dataKey: '',
    disabled: true
  },
  {
    label: 'Email',
    displayLabel: true,
    name: 'Email',
    image: 'assets/images/email-invoice-black.png',
    dataKey: '',
    disabled: true
  },
  {
    label: 'CSV',
    displayLabel: true,
    name: 'CSV',
    image: 'assets/images/csv.svg',
    dataKey: '',
    disabled: true
  },
  {
    label: 'PDF',
    displayLabel: true,
    name: 'PDF',
    image: 'assets/images/pdf.svg',
    dataKey: '',
    disabled: true
  },
  {
    label: 'Archive',
    displayLabel: true,
    name: 'Archive',
    image: 'assets/images/archive.svg',
    dataKey: '',
    disabled: true
  },
];

const ERROR_QUEUE_DROPDOWN = [
  {
    label: 'Void',
    displayLabel: true,
    name: 'Void',
    dataKey: '',
    disabled: true
  }
]

const QUEUE_DROPDOWN = [
  {
    label: 'Approval',
    displayLabel: true,
    name: 'Approval',
    route: '/dashboard/sales-queue',
    disabled: false
  },
  {
    label: 'Distribution',
    displayLabel: true,
    name: 'Distribution',
    route: '/dashboard/distribution-queue',
    disabled: false
  },
  {
    label: 'Error',
    displayLabel: true,
    name: 'Error',
    route: '/dashboard/error-queue',
    disabled: false
  }
];

const SELECTED_ROWS = [
  {
    displayLabel: true,
    key: 5,
    value: '5 Rows'
  },
  {
    displayLabel: true,
    key: 10,
    value: '10 Rows'
  },
  {
    displayLabel: true,
    key: 40,
    value: '40 Rows'
  },
  {
    displayLabel: true,
    key: 100,
    value: '100 Rows'
  }
];

const SALES_TABLE_HEADER_COLUMNS = [
  {
    label: '',
    displayLabel: false,
    name: '',
    key: 'rowActions',
    fieldType: 'checkbox',
    dataKey: '',
    align: 'left',
    width: '50px'
  },
  {
    label: '',
    displayLabel: false,
    name: '',
    key: 'rowActions',
    fieldType: 'image',
    dataKey: 'statusImagePath',
    align: 'center',
    width: '50px',
    getIconPath(obj) {
      if (obj.invoiceStatus === 'Error') {
        return 'assets/images/pending.png';
      } else if (obj.invoiceStatus === 'On Hold') {
        return 'assets/images/alert.png';
      } else if (obj.invoiceStatus === 'New') {
        return 'assets/images/status-new.png';
      } else if (obj.invoiceStatus === 'Approved') {
        return 'assets/images/success-alt.png';
      } else if (obj.invoiceStatus === 'Declined') {
        return 'assets/images/status-declined.png';
      } else if (obj.invoiceStatus === 'Close' || obj.invoiceStatus === 'Void') {
        return 'assets/images/status-cancelled.png';
      } else if (obj.invoiceStatus === 'Distribute') {
        return 'assets/images/status-distributed.png';
      } else if(obj.invoiceStatus === 'Open'){
        return 'assets/images/status-open.svg';
      }else if(obj.invoiceStatus === 'File'){
        return 'assets/images/status-filed.svg';
      } else {
        return '';
      }
    }
  },
  {
    label: 'Invoice #',
    displayLabel: true,
    name: 'Invoice #',
    key: 'invoiceNumber',
    fieldType: 'text',
    dataKey: 'invoiceNumber',
    align: 'left',
    width: '100px',
    anchor: true
  },
  {
    label: 'Invoice Date',
    displayLabel: true,
    name: 'Invoice Date',
    key: 'invoiceDate',
    fieldType: 'text',
    dateFormat: 'MM/DD/YY',
    dataKey: 'invoiceDate',
    align: 'left',
    width: '100px'
  },
  {
    label: 'Total',
    displayLabel: true,
    name: 'Total',
    key: 'invoiceAmount',
    currency: 'USD',
    fieldType: 'text',
    dataKey: 'invoiceAmount',
    align: 'left',
    width: '150px'
  },
  {
    label: 'Customer Type',
    displayLabel: true,
    name: 'Customer Type',
    key: 'invoiceType',
    fieldType: 'text',
    dataKey: 'invoiceType',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'invoiceTypeOrder',
    align: 'left',
    width: '150px'
  },
  {
    label: 'Material',
    displayLabel: true,
    name: 'Material',
    key: 'material',
    fieldType: 'text',
    dataKey: 'material',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'materialOrder',
    align: 'left',
    width: '150px',
    textCase: 'titleCase'
  },
  {
    label: 'Age',
    displayLabel: true,
    name: 'Age',
    key: 'age',
    fieldType: 'text',
    dataKey: 'age',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'ageOrder',
    align: 'left',
    width: '100px',
    getClass(obj) {
      if (obj.age > 3) {
        return 'pending';
      } else {
        return 'otherStatus';
      }
    }
  },
  {
    label: 'Management',
    displayLabel: true,
    name: 'Management',
    key: 'customerPhone',
    fieldType: 'text',
    dataKey: 'customerPhone',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'customerPhoneOrder',
    align: 'left',
    width: '120px'
  },
  {
    label: 'Property',
    displayLabel: true,
    name: 'Property',
    key: 'customerAddress',
    fieldType: 'text',
    dataKey: 'customerAddress',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'propertyOrder',
    align: 'left',
    textCase: 'titleCase',
    width: '150px'
  },
  {
    label: 'Unit #',
    displayLabel: true,
    name: 'Unit #',
    key: 'unit',
    fieldType: 'text',
    dataKey: 'unit',
    align: 'left',
    width: '100px'
  },
  {
    label: 'Sales Person',
    displayLabel: true,
    name: 'Sales Person',
    key: 'salesPerson',
    fieldType: 'text',
    dataKey: 'salesPerson',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'salesPersonOrder',
    align: 'left',
    textCase: 'titleCase',
    width: '150px'
  },
  {
    label: 'Assignee',
    displayLabel: true,
    name: 'Assignee',
    key: 'assignee',
    fieldType: 'text',
    dataKey: 'assignee',
    align: 'left',
    textCase: 'titleCase',
    width: '150px'
  },
  {
    label: 'Status',
    displayLabel: true,
    name: 'Status',
    key: 'invoiceStatus',
    fieldType: 'text',
    dataKey: 'invoiceStatus',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'statusOrder',
    align: 'left',
    textCase: 'titleCase',
    width: '130px',
    getClass(obj) {
      if (
        obj.invoiceStatus === 'Approved' ||
        obj.invoiceStatus === 'Distribute' || obj.invoiceStatus === 'File'
      ) {
        return 'approved';
      } else if (
        obj.invoiceStatus === 'Declined' ||
        obj.invoiceStatus === 'Error' ||
        obj.invoiceStatus === 'Close' || 
        obj.invoiceStatus === 'Void'
      ) {
        return 'pending';
      } else if (obj.invoiceStatus === 'On Hold') {
        return 'onHold';
      } else if (obj.invoiceStatus === 'New' || obj.invoiceStatus === 'Open') {
        return 'new';
      } else {
        return 'otherStatus';
      }
    }
  },
  {
    label: '',
    displayLabel: false,
    name: '',
    key: 'rowActions',
    fieldType: 'menuActions',
    dataKey: '',
    fieldValue: SALES_QUEUE_DROPDOWN,
    align: 'left',
    width: '50px'
  }
];

const HISTORY_TABLE_HEADER_COLUMNS = [
  {
    label: '',
    displayLabel: false,
    name: '',
    key: 'rowActions',
    fieldType: 'image',
    dataKey: 'statusImagePath',
    align: 'center',
    width: '50px',
    getIconPath(obj) {
      if (obj.invoiceStatus === 'Error') {
        return 'assets/images/pending.png';
      } else if (obj.invoiceStatus === 'On Hold') {
        return 'assets/images/alert.png';
      } else if (obj.invoiceStatus === 'New') {
        return 'assets/images/status-new.png';
      } else if (obj.invoiceStatus === 'Approved') {
        return 'assets/images/success-alt.png';
      } else if (obj.invoiceStatus === 'Declined') {
        return 'assets/images/status-declined.png';
      } else if (obj.invoiceStatus === 'Close' || obj.invoiceStatus === 'Void') {
        return 'assets/images/status-cancelled.png';
      } else if (obj.invoiceStatus === 'Distribute') {
        return 'assets/images/status-distributed.png';
      } else if(obj.invoiceStatus === 'Open'){
        return 'assets/images/status-open.svg';
      }else if(obj.invoiceStatus === 'File'){
        return 'assets/images/status-filed.svg';
      } else {
        return '';
      }
    }
  },
  {
    label: 'Invoice #',
    displayLabel: true,
    name: 'Invoice #',
    key: 'invoiceNumber',
    fieldType: 'text',
    dataKey: 'invoiceNumber',
    align: 'left',
    width: '100px',
    anchor: true
  },
  {
    label: 'Invoice Date',
    displayLabel: true,
    name: 'Invoice Date',
    key: 'invoiceDate',
    fieldType: 'text',
    dateFormat: 'MM/DD/YY',
    dataKey: 'invoiceDate',
    align: 'left',
    width: '100px'
  },
  {
    label: 'Total',
    displayLabel: true,
    name: 'Total',
    key: 'invoiceAmount',
    currency: 'USD',
    fieldType: 'text',
    dataKey: 'invoiceAmount',
    align: 'left',
    width: '150px'
  },
  {
    label: 'Customer Type',
    displayLabel: true,
    name: 'Customer Type',
    key: 'invoiceType',
    fieldType: 'text',
    dataKey: 'invoiceType',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'invoiceTypeOrder',
    align: 'left',
    width: '150px'
  },
  {
    label: 'Material',
    displayLabel: true,
    name: 'Material',
    key: 'material',
    fieldType: 'text',
    dataKey: 'material',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'materialOrder',
    align: 'left',
    width: '150px',
    textCase: 'titleCase',
  },
  {
    label: 'Age',
    displayLabel: true,
    name: 'Age',
    key: 'age',
    fieldType: 'text',
    dataKey: 'age',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'ageOrder',
    align: 'left',
    width: '100px',
    getClass(obj) {
      if (obj.age > 3) {
        return 'pending';
      } else {
        return 'otherStatus';
      }
    }
  },
  {
    label: 'Management',
    displayLabel: true,
    name: 'Management',
    key: 'customerPhone',
    fieldType: 'text',
    dataKey: 'customerPhone',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'customerPhoneOrder',
    align: 'left',
    width: '120px'
  },
  {
    label: 'Property',
    displayLabel: true,
    name: 'Property',
    key: 'customerAddress',
    fieldType: 'text',
    dataKey: 'customerAddress',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'propertyOrder',
    align: 'left',
    textCase: 'titleCase',
    width: '150px'
  },
  {
    label: 'Unit #',
    displayLabel: true,
    name: 'Unit #',
    key: 'unit',
    fieldType: 'text',
    dataKey: 'unit',
    align: 'left',
    width: '100px'
  },
  {
    label: 'Sales Person',
    displayLabel: true,
    name: 'Sales Person',
    key: 'salesPerson',
    fieldType: 'text',
    dataKey: 'salesPerson',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'salesPersonOrder',
    align: 'left',
    textCase: 'titleCase',
    width: '150px'
  },
  {
    label: 'Assignee',
    displayLabel: true,
    name: 'Assignee',
    key: 'assignee',
    fieldType: 'text',
    dataKey: 'assignee',
    align: 'left',
    textCase: 'titleCase',
    width: '150px'
  },
  {
    label: 'Status',
    displayLabel: true,
    name: 'Status',
    key: 'invoiceStatus',
    fieldType: 'text',
    dataKey: 'invoiceStatus',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'statusOrder',
    align: 'left',
    textCase: 'titleCase',
    width: '130px',
    getClass(obj) {
      if (
        obj.invoiceStatus === 'Approved' ||
        obj.invoiceStatus === 'Distribute' || obj.invoiceStatus === 'File'
      ) {
        return 'approved';
      } else if (
        obj.invoiceStatus === 'Declined' ||
        obj.invoiceStatus === 'Error' ||
        obj.invoiceStatus === 'Close' || 
        obj.invoiceStatus === 'Void'
      ) {
        return 'pending';
      } else if (obj.invoiceStatus === 'On Hold') {
        return 'onHold';
      } else if (obj.invoiceStatus === 'New' || obj.invoiceStatus === 'Open') {
        return 'new';
      } else {
        return 'otherStatus';
      }
    }
  }
];


const DISTRIBUTION_TABLE_HEADER_COLUMNS = [
  {
    label: '',
    displayLabel: false,
    name: '',
    key: 'rowActions',
    fieldType: 'checkbox',
    dataKey: '',
    align: 'left',
    width: '50px'
  },
  {
    label: '',
    displayLabel: false,
    name: '',
    key: 'rowActions',
    fieldType: 'image',
    dataKey: 'statusImagePath',
    align: 'center',
    width: '50px',
    getIconPath(obj) {
      if (obj.invoiceStatus === 'Error') {
        return 'assets/images/pending.png';
      } else if (obj.invoiceStatus === 'On Hold') {
        return 'assets/images/alert.png';
      } else if (obj.invoiceStatus === 'New') {
        return 'assets/images/status-new.png';
      } else if (obj.invoiceStatus === 'Approved') {
        return 'assets/images/success-alt.png';
      } else if (obj.invoiceStatus === 'Declined') {
        return 'assets/images/status-declined.png';
      } else if (obj.invoiceStatus === 'Close' || obj.invoiceStatus === 'Void') {
        return 'assets/images/status-cancelled.png';
      } else if (obj.invoiceStatus === 'Distribute') {
        return 'assets/images/status-distributed.png';
      } else if(obj.invoiceStatus === 'Open'){
        return 'assets/images/status-open.svg';
      }else if(obj.invoiceStatus === 'File'){
        return 'assets/images/status-filed.svg';
      } else {
        return '';
      }
    }
  },
  {
    label: 'Invoice #',
    displayLabel: true,
    name: 'Invoice #',
    key: 'invoiceNumber',
    fieldType: 'text',
    dataKey: 'invoiceNumber',
    align: 'left',
    width: '100px',
    anchor: true
  },
  {
    label: 'Invoice Date',
    displayLabel: true,
    name: 'Invoice Date',
    key: 'invoiceDate',
    fieldType: 'text',
    dateFormat: 'MM/DD/YY',
    dataKey: 'invoiceDate',
    align: 'left',
    width: '100px'
  },
  {
    label: 'Total',
    displayLabel: true,
    name: 'Total',
    key: 'invoiceAmount',
    currency: 'USD',
    fieldType: 'text',
    dataKey: 'invoiceAmount',
    align: 'left',
    width: '150px'
  },
  {
    label: 'Customer Type',
    displayLabel: true,
    name: 'Customer Type',
    key: 'invoiceType',
    fieldType: 'text',
    dataKey: 'invoiceType',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'invoiceTypeOrder',
    align: 'left',
    width: '150px'
  },
  {
    label: 'Material',
    displayLabel: true,
    name: 'Material',
    key: 'material',
    fieldType: 'text',
    dataKey: 'material',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'materialOrder',
    align: 'left',
    width: '150px',
    textCase: 'titleCase'
  },
  {
    label: 'Age',
    displayLabel: true,
    name: 'Age',
    key: 'age',
    fieldType: 'text',
    dataKey: 'age',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'ageOrder',
    align: 'left',
    width: '100px',
    getClass(obj) {
      if (obj.age > 3) {
        return 'pending';
      } else {
        return 'otherStatus';
      }
    }
  },
  {
    label: 'Management',
    displayLabel: true,
    name: 'Management',
    key: 'customerPhone',
    fieldType: 'text',
    dataKey: 'customerPhone',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'customerPhoneOrder',
    align: 'left',
    width: '120px'
  },
  {
    label: 'Property',
    displayLabel: true,
    name: 'Property',
    key: 'customerAddress',
    fieldType: 'text',
    dataKey: 'customerAddress',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'propertyOrder',
    align: 'left',
    textCase: 'titleCase',
    width: '150px'
  },
  {
    label: 'Unit #',
    displayLabel: true,
    name: 'Unit #',
    key: 'unit',
    fieldType: 'text',
    dataKey: 'unit',
    align: 'left',
    width: '100px'
  },
  {
    label: 'Sales Person',
    displayLabel: true,
    name: 'Sales Person',
    key: 'salesPerson',
    fieldType: 'text',
    dataKey: 'salesPerson',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'salesPersonOrder',
    align: 'left',
    textCase: 'titleCase',
    width: '150px'
  },

  {
    label: 'Assignee',
    displayLabel: true,
    name: 'Assignee',
    key: 'assignee',
    fieldType: 'text',
    dataKey: 'assignee',
    align: 'left',
    textCase: 'titleCase',
    width: '150px'
  },
  {
    label: 'Status',
    displayLabel: true,
    name: 'Status',
    key: 'invoiceStatus',
    fieldType: 'text',
    dataKey: 'invoiceStatus',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'statusOrder',
    align: 'left',
    textCase: 'titleCase',
    width: '130px',
    getClass(obj) {
      if (
        obj.invoiceStatus === 'Approved' ||
        obj.invoiceStatus === 'Distribute' || obj.invoiceStatus === 'File'
      ) {
        return 'approved';
      } else if (
        obj.invoiceStatus === 'Declined' ||
        obj.invoiceStatus === 'Error' ||
        obj.invoiceStatus === 'Close' || 
        obj.invoiceStatus === 'Void'
      ) {
        return 'pending';
      } else if (obj.invoiceStatus === 'On Hold') {
        return 'onHold';
      } else if (obj.invoiceStatus === 'New' || obj.invoiceStatus === 'Open') {
        return 'new';
      } else {
        return 'otherStatus';
      }
    }
  },
  {
    label: '',
    displayLabel: false,
    name: '',
    key: 'rowActions',
    fieldType: 'menuActions',
    dataKey: '',
    fieldValue: DISTRIBUTION_QUEUE_DROPDOWN,
    align: 'left',
    width: '50px'
  }
];

const PAYMENT_TABLE_HEADER_COLUMNS = [
  {
    label: '',
    displayLabel: false,
    name: '',
    key: 'rowActions',
    fieldType: 'checkbox',
    dataKey: '',
    align: 'left'
  },
  {
    label: 'Invoice #',
    displayLabel: true,
    name: 'Invoice #',
    key: 'invoiceNumber',
    fieldType: 'text',
    dataKey: 'invoiceNumber',
    align: 'left',
    anchor: true
  },
  {
    label: 'Invoice Date',
    displayLabel: true,
    name: 'Invoice Date',
    key: 'invoiceDate',
    fieldType: 'text',
    dateFormat: 'MM/DD/YY',
    dataKey: 'invoiceDate',
    align: 'left'
  },
  {
    label: 'Job Date',
    displayLabel: true,
    name: 'Job Date',
    key: 'jobDate',
    fieldType: 'text',
    dateFormat: 'MM/DD/YY',
    dataKey: 'jobDate',
    sorting: true,
    defaultSortBy: 'asc',
    align: 'left'
  },
  {
    label: 'Unit #',
    displayLabel: true,
    name: 'Unit #',
    key: 'unit',
    fieldType: 'text',
    dataKey: 'unit',
    align: 'right'
  },
  {
    label: 'PO#',
    displayLabel: true,
    name: 'PO#',
    key: 'po',
    fieldType: 'text',
    dataKey: 'po',
    align: 'left'
  },
  {
    label: 'Due Date',
    displayLabel: true,
    name: 'Due Date',
    key: 'dueDate',
    fieldType: 'text',
    dataKey: 'dueDate',
    sorting: true,
    defaultSortBy: 'asc',
    align: 'left'
  },
  {
    label: 'Total',
    displayLabel: true,
    name: 'Total',
    key: 'total',
    fieldType: 'text',
    currency: 'USD',
    dataKey: 'total',
    align: 'right'
  },
  {
    label: 'Amount Paid',
    displayLabel: true,
    name: 'Amount Paid',
    key: 'amount',
    fieldType: 'text',
    currency: 'USD',
    dataKey: 'amount',
    align: 'left'
  },
  {
    label: 'Balance Due',
    displayLabel: true,
    name: 'Balance Due',
    key: 'balance',
    fieldType: 'text',
    currency: 'USD',
    dataKey: 'balance',
    align: 'left'
  },
  {
    label: 'Status',
    displayLabel: true,
    name: 'Status',
    key: 'invoiceStatus',
    fieldType: 'text',
    dataKey: 'invoiceStatus',
    sorting: true,
    defaultSortBy: 'asc',
    sortKey: 'statusOrder',
    align: 'left'
  },
  {
    label: '',
    displayLabel: false,
    name: '',
    key: 'rowActions',
    fieldType: 'button',
    dataKey: '',
    align: ''
  }
];

const DEFAULT_PAGENO: number = 1;
const DEFAULT_PAGESIZE: number = 40;
const DEFAULT_TOTALCOUNT: number = 0;
const SALES_QUEUE: string = 'sales-queue';
const DISTRIBUTION_QUEUE: string = 'distribution-queue';
const FILE_QUEUE: string = 'file-queue';
const ERROR_QUEUE: string = 'error-queue';
const HISTORY: string = 'history';
const DISTRIBUTION = "distribution";
const APPROVAL: string = "approval";
const DISTRIBUTE: string = "distribute";
const FILE: string = "file";
const ERROR: string = "error";
const DATE_FORMAT : string = "MM/DD/YY"
const DEFAULT_ACTIVITY_HEIGHT: any = 56;

export {
  SALES_TABLE_HEADER_COLUMNS,
  HISTORY_TABLE_HEADER_COLUMNS,
  DISTRIBUTION_TABLE_HEADER_COLUMNS,
  PAYMENT_TABLE_HEADER_COLUMNS,
  SALES_QUEUE_DROPDOWN,
  ERROR_QUEUE_DROPDOWN,
  QUEUE_DROPDOWN,
  SELECTED_ROWS,
  DEFAULT_PAGENO,
  DEFAULT_PAGESIZE,
  DEFAULT_TOTALCOUNT,
  SALES_QUEUE,
  DISTRIBUTION_QUEUE,
  FILE_QUEUE,
  ERROR_QUEUE,
  DISTRIBUTION,
  APPROVAL,
  DISTRIBUTE,
  FILE,
  ERROR,
  DATE_FORMAT,
  DEFAULT_ACTIVITY_HEIGHT,
  HISTORY
};
