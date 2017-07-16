// Type definitions for Google Google Play EMM API v1
// Project: https://developers.google.com/android/work/play/emm-api
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.androidenterprise {
    
    interface Administrator {
        // The admin's email address.
        email?: string,
    }
    
    interface AdministratorWebToken {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#administratorWebToken".
        kind?: string,
        // An opaque token to be passed to the Play front-end to generate an iframe.
        token?: string,
    }
    
    interface AdministratorWebTokenSpec {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#administratorWebTokenSpec".
        kind?: string,
        // The URI of the parent frame hosting the iframe. To prevent XSS, the iframe may not be hosted at other URIs. This URI must be https.
        parent?: string,
        // The list of permissions the admin is granted within the iframe. The admin will only be allowed to view an iframe if they have all of the permissions associated with it. The only valid value is "approveApps" that will allow the admin to access the iframe in "approve" mode.
        permission?: string[],        
    }
    
    interface AppRestrictionsSchema {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#appRestrictionsSchema".
        kind?: string,
        // The set of restrictions that make up this schema.
        restrictions?: AppRestrictionsSchemaRestriction[],        
    }
    
    interface AppRestrictionsSchemaChangeEvent {
        // The id of the product (e.g. "app:com.google.android.gm") for which the app restriction schema changed. This field will always be present.
        productId?: string,
    }
    
    interface AppRestrictionsSchemaRestriction {
        // The default value of the restriction. bundle and bundleArray restrictions never have a default value.
        defaultValue?: AppRestrictionsSchemaRestrictionRestrictionValue,
        // A longer description of the restriction, giving more detail of what it affects.
        description?: string,
        // For choice or multiselect restrictions, the list of possible entries' human-readable names.
        entry?: string[],        
        // For choice or multiselect restrictions, the list of possible entries' machine-readable values. These values should be used in the configuration, either as a single string value for a choice restriction or in a stringArray for a multiselect restriction.
        entryValue?: string[],        
        // The unique key that the product uses to identify the restriction, e.g. "com.google.android.gm.fieldname".
        key?: string,
        // For bundle or bundleArray restrictions, the list of nested restrictions. A bundle restriction is always nested within a bundleArray restriction, and a bundleArray restriction is at most two levels deep.
        nestedRestriction?: AppRestrictionsSchemaRestriction[],        
        // The type of the restriction.
        restrictionType?: string,
        // The name of the restriction.
        title?: string,
    }
    
    interface AppRestrictionsSchemaRestrictionRestrictionValue {
        // The type of the value being provided.
        type?: string,
        // The boolean value - this will only be present if type is bool.
        valueBool?: boolean,
        // The integer value - this will only be present if type is integer.
        valueInteger?: number,
        // The list of string values - this will only be present if type is multiselect.
        valueMultiselect?: string[],        
        // The string value - this will be present for types string, choice and hidden.
        valueString?: string,
    }
    
    interface AppUpdateEvent {
        // The id of the product (e.g. "app:com.google.android.gm") that was updated. This field will always be present.
        productId?: string,
    }
    
    interface AppVersion {
        // Unique increasing identifier for the app version.
        versionCode?: number,
        // The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4").
        versionString?: string,
    }
    
    interface ApprovalUrlInfo {
        // A URL that displays a product's permissions and that can also be used to approve the product with the Products.approve call.
        approvalUrl?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#approvalUrlInfo".
        kind?: string,
    }
    
    interface AuthenticationToken {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#authenticationToken".
        kind?: string,
        // The authentication token to be passed to the device policy client on the device where it can be used to provision the account for which this token was generated.
        token?: string,
    }
    
    interface Device {
        // The Google Play Services Android ID for the device encoded as a lowercase hex string. For example, "123456789abcdef0".
        androidId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#device".
        kind?: string,
        // Identifies the extent to which the device is controlled by a managed Google Play EMM in various deployment configurations.
        // 
        // Possible values include: 
        // - "managedDevice", a device that has the EMM's device policy controller (DPC) as the device owner. 
        // - "managedProfile", a device that has a profile managed by the DPC (DPC is profile owner) in addition to a separate, personal profile that is unavailable to the DPC. 
        // - "containerApp", no longer used (deprecated). 
        // - "unmanagedProfile", a device that has been allowed (by the domain's admin, using the Admin Console to enable the privilege) to use managed Google Play, but the profile is itself not owned by a DPC.
        managementType?: string,
    }
    
    interface DeviceState {
        // The state of the Google account on the device. "enabled" indicates that the Google account on the device can be used to access Google services (including Google Play), while "disabled" means that it cannot. A new device is initially in the "disabled" state.
        accountState?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#deviceState".
        kind?: string,
    }
    
    interface DevicesListResponse {
        // A managed device.
        device?: Device[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#devicesListResponse".
        kind?: string,
    }
    
    interface Enterprise {
        // Admins of the enterprise. This is only supported for enterprises created via the EMM-initiated flow.
        administrator?: Administrator[],        
        // The unique ID for the enterprise.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterprise".
        kind?: string,
        // The name of the enterprise, for example, "Example, Inc".
        name?: string,
        // The enterprise's primary domain, such as "example.com".
        primaryDomain?: string,
    }
    
    interface EnterpriseAccount {
        // The email address of the service account.
        accountEmail?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterpriseAccount".
        kind?: string,
    }
    
    interface EnterprisesListResponse {
        // An enterprise.
        enterprise?: Enterprise[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#enterprisesListResponse".
        kind?: string,
    }
    
    interface EnterprisesSendTestPushNotificationResponse {
        // The message ID of the test push notification that was sent.
        messageId?: string,
        // The name of the Cloud Pub/Sub topic to which notifications for this enterprise's enrolled account will be sent.
        topicName?: string,
    }
    
    interface Entitlement {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#entitlement".
        kind?: string,
        // The ID of the product that the entitlement is for. For example, "app:com.google.android.gm".
        productId?: string,
        // The reason for the entitlement. For example, "free" for free apps. This property is temporary: it will be replaced by the acquisition kind field of group licenses.
        reason?: string,
    }
    
    interface EntitlementsListResponse {
        // An entitlement of a user to a product (e.g. an app). For example, a free app that they have installed, or a paid app that they have been allocated a license to.
        entitlement?: Entitlement[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#entitlementsListResponse".
        kind?: string,
    }
    
    interface GroupLicense {
        // How this group license was acquired. "bulkPurchase" means that this Grouplicenses resource was created because the enterprise purchased licenses for this product; otherwise, the value is "free" (for free products).
        acquisitionKind?: string,
        // Whether the product to which this group license relates is currently approved by the enterprise. Products are approved when a group license is first created, but this approval may be revoked by an enterprise admin via Google Play. Unapproved products will not be visible to end users in collections, and new entitlements to them should not normally be created.
        approval?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicense".
        kind?: string,
        // The total number of provisioned licenses for this product. Returned by read operations, but ignored in write operations.
        numProvisioned?: number,
        // The number of purchased licenses (possibly in multiple purchases). If this field is omitted, then there is no limit on the number of licenses that can be provisioned (for example, if the acquisition kind is "free").
        numPurchased?: number,
        // The permission approval status of the product. This field is only set if the product is approved. Possible states are: 
        // - "currentApproved", the current set of permissions is approved, but additional permissions will require the administrator to reapprove the product (If the product was approved without specifying the approved permissions setting, then this is the default behavior.), 
        // - "needsReapproval", the product has unapproved permissions. No additional product licenses can be assigned until the product is reapproved, 
        // - "allCurrentAndFutureApproved", the current permissions are approved and any future permission updates will be automatically approved without administrator review.
        permissions?: string,
        // The ID of the product that the license is for. For example, "app:com.google.android.gm".
        productId?: string,
    }
    
    interface GroupLicenseUsersListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicenseUsersListResponse".
        kind?: string,
        // A user of an enterprise.
        user?: User[],        
    }
    
    interface GroupLicensesListResponse {
        // A group license for a product approved for use in the enterprise.
        groupLicense?: GroupLicense[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#groupLicensesListResponse".
        kind?: string,
    }
    
    interface Install {
        // Install state. The state "installPending" means that an install request has recently been made and download to the device is in progress. The state "installed" means that the app has been installed. This field is read-only.
        installState?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#install".
        kind?: string,
        // The ID of the product that the install is for. For example, "app:com.google.android.gm".
        productId?: string,
        // The version of the installed product. Guaranteed to be set only if the install state is "installed".
        versionCode?: number,
    }
    
    interface InstallFailureEvent {
        // The Android ID of the device. This field will always be present.
        deviceId?: string,
        // Additional details on the failure if applicable.
        failureDetails?: string,
        // The reason for the installation failure. This field will always be present.
        failureReason?: string,
        // The id of the product (e.g. "app:com.google.android.gm") for which the install failure event occured. This field will always be present.
        productId?: string,
        // The ID of the user. This field will always be present.
        userId?: string,
    }
    
    interface InstallsListResponse {
        // An installation of an app for a user on a specific device. The existence of an install implies that the user must have an entitlement to the app.
        install?: Install[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#installsListResponse".
        kind?: string,
    }
    
    interface LocalizedText {
        // The BCP47 tag for a locale. (e.g. "en-US", "de").
        locale?: string,
        // The text localized in the associated locale.
        text?: string,
    }
    
    interface ManagedConfiguration {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfiguration".
        kind?: string,
        // The set of managed properties for this configuration.
        managedProperty?: ManagedProperty[],        
        // The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm".
        productId?: string,
    }
    
    interface ManagedConfigurationsForDeviceListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfigurationsForDeviceListResponse".
        kind?: string,
        // A managed configuration for an app on a specific device.
        managedConfigurationForDevice?: ManagedConfiguration[],        
    }
    
    interface ManagedConfigurationsForUserListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#managedConfigurationsForUserListResponse".
        kind?: string,
        // A managed configuration for an app for a specific user.
        managedConfigurationForUser?: ManagedConfiguration[],        
    }
    
    interface ManagedProperty {
        // The unique key that identifies the property.
        key?: string,
        // The boolean value - this will only be present if type of the property is bool.
        valueBool?: boolean,
        // The bundle of managed properties - this will only be present if type of the property is bundle.
        valueBundle?: ManagedPropertyBundle,
        // The list of bundles of properties - this will only be present if type of the property is bundle_array.
        valueBundleArray?: ManagedPropertyBundle[],        
        // The integer value - this will only be present if type of the property is integer.
        valueInteger?: number,
        // The string value - this will only be present if type of the property is string, choice or hidden.
        valueString?: string,
        // The list of string values - this will only be present if type of the property is multiselect.
        valueStringArray?: string[],        
    }
    
    interface ManagedPropertyBundle {
        // The list of managed properties.
        managedProperty?: ManagedProperty[],        
    }
    
    interface NewDeviceEvent {
        // The Android ID of the device. This field will always be present.
        deviceId?: string,
        // Identifies the extent to which the device is controlled by an Android EMM in various deployment configurations.
        // 
        // Possible values include: 
        // - "managedDevice", a device where the DPC is set as device owner, 
        // - "managedProfile", a device where the DPC is set as profile owner.
        managementType?: string,
        // The ID of the user. This field will always be present.
        userId?: string,
    }
    
    interface NewPermissionsEvent {
        // The set of permissions that the enterprise admin has already approved for this application. Use Permissions.Get on the EMM API to retrieve details about these permissions.
        approvedPermissions?: string[],        
        // The id of the product (e.g. "app:com.google.android.gm") for which new permissions were added. This field will always be present.
        productId?: string,
        // The set of permissions that the app is currently requesting. Use Permissions.Get on the EMM API to retrieve details about these permissions.
        requestedPermissions?: string[],        
    }
    
    interface Notification {
        // Notifications about new app restrictions schema changes.
        appRestrictionsSchemaChangeEvent?: AppRestrictionsSchemaChangeEvent,
        // Notifications about app updates.
        appUpdateEvent?: AppUpdateEvent,
        // The ID of the enterprise for which the notification is sent. This will always be present.
        enterpriseId?: string,
        // Notifications about an app installation failure.
        installFailureEvent?: InstallFailureEvent,
        // Notifications about new devices.
        newDeviceEvent?: NewDeviceEvent,
        // Notifications about new app permissions.
        newPermissionsEvent?: NewPermissionsEvent,
        // Type of the notification.
        notificationType?: string,
        // Notifications about changes to a product's approval status.
        productApprovalEvent?: ProductApprovalEvent,
        // Notifications about product availability changes.
        productAvailabilityChangeEvent?: ProductAvailabilityChangeEvent,
        // The time when the notification was published in milliseconds since 1970-01-01T00:00:00Z. This will always be present.
        timestampMillis?: string,
    }
    
    interface NotificationSet {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#notificationSet".
        kind?: string,
        // The notifications received, or empty if no notifications are present.
        notification?: Notification[],        
        // The notification set ID, required to mark the notification as received with the Enterprises.AcknowledgeNotification API. This will be omitted if no notifications are present.
        notificationSetId?: string,
    }
    
    interface PageInfo {
        // 
        resultPerPage?: number,
        // 
        startIndex?: number,
        // 
        totalResults?: number,
    }
    
    interface Permission {
        // A longer description of the Permissions resource, giving more details of what it affects.
        description?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#permission".
        kind?: string,
        // The name of the permission.
        name?: string,
        // An opaque string uniquely identifying the permission.
        permissionId?: string,
    }
    
    interface Product {
        // App versions currently available for this product. The returned list contains only public versions. Alpha and beta versions are not included.
        appVersion?: AppVersion[],        
        // The name of the author of the product (for example, the app developer).
        authorName?: string,
        // A link to the (consumer) Google Play details page for the product.
        detailsUrl?: string,
        // How and to whom the package is made available. The value publicGoogleHosted means that the package is available through the Play store and not restricted to a specific enterprise. The value privateGoogleHosted means that the package is a private app (restricted to an enterprise) but hosted by Google. The value privateSelfHosted means that the package is a private app (restricted to an enterprise) and is privately hosted.
        distributionChannel?: string,
        // A link to an image that can be used as an icon for the product. This image is suitable for use at up to 512px x 512px.
        iconUrl?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#product".
        kind?: string,
        // A string of the form app:<package name>. For example, app:com.google.android.gm represents the Gmail app.
        productId?: string,
        // Whether this product is free, free with in-app purchases, or paid. If the pricing is unknown, this means the product is not generally available anymore (even though it might still be available to people who own it).
        productPricing?: string,
        // Deprecated.
        requiresContainerApp?: boolean,
        // A link to a smaller image that can be used as an icon for the product. This image is suitable for use at up to 128px x 128px.
        smallIconUrl?: string,
        // The name of the product.
        title?: string,
        // A link to the managed Google Play details page for the product, for use by an Enterprise admin.
        workDetailsUrl?: string,
    }
    
    interface ProductApprovalEvent {
        // Whether the product was approved or unapproved. This field will always be present.
        approved?: string,
        // The id of the product (e.g. "app:com.google.android.gm") for which the approval status has changed. This field will always be present.
        productId?: string,
    }
    
    interface ProductAvailabilityChangeEvent {
        // The new state of the product. This field will always be present.
        availabilityStatus?: string,
        // The id of the product (e.g. "app:com.google.android.gm") for which the product availability changed. This field will always be present.
        productId?: string,
    }
    
    interface ProductPermission {
        // An opaque string uniquely identifying the permission.
        permissionId?: string,
        // Whether the permission has been accepted or not.
        state?: string,
    }
    
    interface ProductPermissions {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#productPermissions".
        kind?: string,
        // The permissions required by the app.
        permission?: ProductPermission[],        
        // The ID of the app that the permissions relate to, e.g. "app:com.google.android.gm".
        productId?: string,
    }
    
    interface ProductSet {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#productSet".
        kind?: string,
        // The list of product IDs making up the set of products.
        productId?: string[],        
        // The interpretation of this product set. "unknown" should never be sent and is ignored if received. "whitelist" means that the user is entitled to access the product set. "includeAll" means that all products are accessible, including products that are approved, products with revoked approval, and products that have never been approved. "allApproved" means that the user is entitled to access all products that are approved for the enterprise. If the value is "allApproved" or "includeAll", the productId field is ignored. If no value is provided, it is interpreted as "whitelist" for backwards compatibility.
        productSetBehavior?: string,
    }
    
    interface ProductsApproveRequest {
        // The approval URL that was shown to the user. Only the permissions shown to the user with that URL will be accepted, which may not be the product's entire set of permissions. For example, the URL may only display new permissions from an update after the product was approved, or not include new permissions if the product was updated since the URL was generated.
        approvalUrlInfo?: ApprovalUrlInfo,
        // Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved.
        approvedPermissions?: string,
    }
    
    interface ProductsGenerateApprovalUrlResponse {
        // A URL that can be rendered in an iframe to display the permissions (if any) of a product. This URL can be used to approve the product only once and only within 24 hours of being generated, using the Products.approve call. If the product is currently unapproved and has no permissions, this URL will point to an empty page. If the product is currently approved, a URL will only be generated if that product has added permissions since it was last approved, and the URL will only display those new permissions that have not yet been accepted.
        url?: string,
    }
    
    interface ProductsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#productsListResponse".
        kind?: string,
        // General pagination information.
        pageInfo?: PageInfo,
        // Information about a product (e.g. an app) in the Google Play store, for display to an enterprise admin.
        product?: Product[],        
        // Pagination information for token pagination.
        tokenPagination?: TokenPagination,
    }
    
    interface ServiceAccount {
        // Credentials that can be used to authenticate as this ServiceAccount.
        key?: ServiceAccountKey,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#serviceAccount".
        kind?: string,
        // The account name of the service account, in the form of an email address. Assigned by the server.
        name?: string,
    }
    
    interface ServiceAccountKey {
        // The body of the private key credentials file, in string format. This is only populated when the ServiceAccountKey is created, and is not stored by Google.
        data?: string,
        // An opaque, unique identifier for this ServiceAccountKey. Assigned by the server.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#serviceAccountKey".
        kind?: string,
        // Public key data for the credentials file. This is an X.509 cert. If you are using the googleCredentials key type, this is identical to the cert that can be retrieved by using the X.509 cert url inside of the credentials file.
        publicData?: string,
        // The file format of the generated key data.
        type?: string,
    }
    
    interface ServiceAccountKeysListResponse {
        // The service account credentials.
        serviceAccountKey?: ServiceAccountKey[],        
    }
    
    interface SignupInfo {
        // An opaque token that will be required, along with the Enterprise Token, for obtaining the enterprise resource from CompleteSignup.
        completionToken?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#signupInfo".
        kind?: string,
        // A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe.
        url?: string,
    }
    
    interface StoreCluster {
        // Unique ID of this cluster. Assigned by the server. Immutable once assigned.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeCluster".
        kind?: string,
        // Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.
        name?: LocalizedText[],        
        // String (US-ASCII only) used to determine order of this cluster within the parent page's elements. Page elements are sorted in lexicographic order of this field. Duplicated values are allowed, but ordering between elements with duplicate order is undefined.
        // 
        // The value of this field is never visible to a user, it is used solely for the purpose of defining an ordering. Maximum length is 256 characters.
        orderInPage?: string,
        // List of products in the order they are displayed in the cluster. There should not be duplicates within a cluster.
        productId?: string[],        
    }
    
    interface StoreLayout {
        // The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store.
        // 
        // Not specifying a homepage is equivalent to setting the store layout type to "basic".
        homepageId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayout".
        kind?: string,
        // The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user.
        storeLayoutType?: string,
    }
    
    interface StoreLayoutClustersListResponse {
        // A store cluster of an enterprise.
        cluster?: StoreCluster[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayoutClustersListResponse".
        kind?: string,
    }
    
    interface StoreLayoutPagesListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storeLayoutPagesListResponse".
        kind?: string,
        // A store page of an enterprise.
        page?: StorePage[],        
    }
    
    interface StorePage {
        // Unique ID of this page. Assigned by the server. Immutable once assigned.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#storePage".
        kind?: string,
        // Ordered list of pages a user should be able to reach from this page. The pages must exist, must not be this page, and once a link is created the page linked to cannot be deleted until all links to it are removed. It is recommended that the basic pages are created first, before adding the links between pages.
        // 
        // No attempt is made to verify that all pages are reachable from the homepage.
        link?: string[],        
        // Ordered list of localized strings giving the name of this page. The text displayed is the one that best matches the user locale, or the first entry if there is no good match. There needs to be at least one entry.
        name?: LocalizedText[],        
    }
    
    interface TokenPagination {
        // 
        nextPageToken?: string,
        // 
        previousPageToken?: string,
    }
    
    interface User {
        // A unique identifier you create for this user, such as "user342" or "asset#44418". Do not use personally identifiable information (PII) for this property. Must always be set for EMM-managed users. Not set for Google-managed users.
        accountIdentifier?: string,
        // The type of account that this user represents. A userAccount can be installed on multiple devices, but a deviceAccount is specific to a single device. An EMM-managed user (emmManaged) can be either type (userAccount, deviceAccount), but a Google-managed user (googleManaged) is always a userAccount.
        accountType?: string,
        // The name that will appear in user interfaces. Setting this property is optional when creating EMM-managed users. If you do set this property, use something generic about the organization (such as "Example, Inc.") or your name (as EMM). Not used for Google-managed user accounts.
        displayName?: string,
        // The unique ID for the user.
        id?: string,
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#user".
        kind?: string,
        // The entity that manages the user. With googleManaged users, the source of truth is Google so EMMs have to make sure a Google Account exists for the user. With emmManaged users, the EMM is in charge.
        managementType?: string,
        // The user's primary email address, for example, "jsmith@example.com". Will always be set for Google managed users and not set for EMM managed users.
        primaryEmail?: string,
    }
    
    interface UserToken {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#userToken".
        kind?: string,
        // The token (activation code) to be entered by the user. This consists of a sequence of decimal digits. Note that the leading digit may be 0.
        token?: string,
        // The unique ID for the user.
        userId?: string,
    }
    
    interface UsersListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidenterprise#usersListResponse".
        kind?: string,
        // A user of an enterprise.
        user?: User[],        
    }
    
    interface DevicesResource {
        // Retrieves the details of a device.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Device>;        
        
        // Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
        getState (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<DeviceState>;        
        
        // Retrieves the IDs of all of a user's devices.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<DevicesListResponse>;        
        
        // Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
        setState (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<DeviceState>;        
        
    }
    
    
    interface EnterprisesResource {
        // Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
        acknowledgeNotificationSet (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.
            notificationSetId?: string,
        }) : gapi.client.Request<void>;        
        
        // Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
        completeSignup (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Completion token initially returned by GenerateSignupUrl.
            completionToken?: string,
            // The Enterprise token appended to the Callback URL.
            enterpriseToken?: string,
        }) : gapi.client.Request<Enterprise>;        
        
        // Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the javascript API documentation for further information.
        createWebToken (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<AdministratorWebToken>;        
        
        // Deletes the binding between the EMM and enterprise. This is now deprecated. Use this method only to unenroll customers that were previously enrolled with the insert call, then enroll them again with the enroll call.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<void>;        
        
        // Enrolls an enterprise with the calling EMM.
        enroll (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The token provided by the enterprise to register the EMM.
            token: string,
        }) : gapi.client.Request<Enterprise>;        
        
        // Generates a sign-up URL.
        generateSignupUrl (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request.
            // Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed.
            callbackUrl?: string,
        }) : gapi.client.Request<SignupInfo>;        
        
        // Retrieves the name and domain of an enterprise.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<Enterprise>;        
        
        // Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side.
        // 
        // This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error.
        // 
        // Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials.
        // 
        // Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
        getServiceAccount (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The type of credential to return with the service account. Required.
            keyType?: string,
        }) : gapi.client.Request<ServiceAccount>;        
        
        // Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
        getStoreLayout (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<StoreLayout>;        
        
        // Establishes the binding between the EMM and an enterprise. This is now deprecated; use enroll instead.
        insert (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The token provided by the enterprise to register the EMM.
            token: string,
        }) : gapi.client.Request<Enterprise>;        
        
        // Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The exact primary domain name of the enterprise to look up.
            domain: string,
        }) : gapi.client.Request<EnterprisesListResponse>;        
        
        // Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending.
        // A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty.
        // Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy.
        // Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending.
        // If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
        pullNotificationSet (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The request mode for pulling notifications.
            // Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time.
            // Speciying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present.
            // If omitted, defaults to waitForNotifications.
            requestMode?: string,
        }) : gapi.client.Request<NotificationSet>;        
        
        // Sends a test push notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
        sendTestPushNotification (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<EnterprisesSendTestPushNotificationResponse>;        
        
        // Sets the account that will be used to authenticate to the API as the enterprise.
        setAccount (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<EnterpriseAccount>;        
        
        // Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the  setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
        setStoreLayout (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<StoreLayout>;        
        
        // Unenrolls an enterprise from the calling EMM.
        unenroll (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface EntitlementsResource {
        // Removes an entitlement to an app for a user.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
            entitlementId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves details of an entitlement.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
            entitlementId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Entitlement>;        
        
        // Lists all entitlements for the specified user. Only the ID is set.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<EntitlementsListResponse>;        
        
        // Adds or updates an entitlement to an app for a user. This method supports patch semantics.
        patch (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
            entitlementId: string,
            // Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
            install?: boolean,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Entitlement>;        
        
        // Adds or updates an entitlement to an app for a user.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
            entitlementId: string,
            // Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
            install?: boolean,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Entitlement>;        
        
    }
    
    
    interface GrouplicensesResource {
        // Retrieves details of an enterprise's group license for a product.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product the group license is for, e.g. "app:com.google.android.gm".
            groupLicenseId: string,
        }) : gapi.client.Request<GroupLicense>;        
        
        // Retrieves IDs of all products for which the enterprise has a group license.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<GroupLicensesListResponse>;        
        
    }
    
    
    interface GrouplicenseusersResource {
        // Retrieves the IDs of the users who have been granted entitlements under the license.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product the group license is for, e.g. "app:com.google.android.gm".
            groupLicenseId: string,
        }) : gapi.client.Request<GroupLicenseUsersListResponse>;        
        
    }
    
    
    interface InstallsResource {
        // Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product represented by the install, e.g. "app:com.google.android.gm".
            installId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves details of an installation of an app on a device.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product represented by the install, e.g. "app:com.google.android.gm".
            installId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Install>;        
        
        // Retrieves the details of all apps installed on the specified device.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<InstallsListResponse>;        
        
        // Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary. This method supports patch semantics.
        patch (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product represented by the install, e.g. "app:com.google.android.gm".
            installId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Install>;        
        
        // Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product represented by the install, e.g. "app:com.google.android.gm".
            installId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<Install>;        
        
    }
    
    
    interface ManagedconfigurationsfordeviceResource {
        // Removes a per-device managed configuration for an app for the specified device.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
            managedConfigurationForDeviceId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves details of a per-device managed configuration.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
            managedConfigurationForDeviceId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ManagedConfiguration>;        
        
        // Lists all the per-device managed configurations for the specified device. Only the ID is set.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ManagedConfigurationsForDeviceListResponse>;        
        
        // Adds or updates a per-device managed configuration for an app for the specified device. This method supports patch semantics.
        patch (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
            managedConfigurationForDeviceId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ManagedConfiguration>;        
        
        // Adds or updates a per-device managed configuration for an app for the specified device.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The Android ID of the device.
            deviceId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
            managedConfigurationForDeviceId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ManagedConfiguration>;        
        
    }
    
    
    interface ManagedconfigurationsforuserResource {
        // Removes a per-user managed configuration for an app for the specified user.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
            managedConfigurationForUserId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves details of a per-user managed configuration for an app for the specified user.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
            managedConfigurationForUserId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ManagedConfiguration>;        
        
        // Lists all the per-user managed configurations for the specified user. Only the ID is set.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ManagedConfigurationsForUserListResponse>;        
        
        // Adds or updates a per-user managed configuration for an app for the specified user. This method supports patch semantics.
        patch (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
            managedConfigurationForUserId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ManagedConfiguration>;        
        
        // Adds or updates a per-user managed configuration for an app for the specified user.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
            managedConfigurationForUserId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ManagedConfiguration>;        
        
    }
    
    
    interface PermissionsResource {
        // Retrieves details of an Android app permission for display to an enterprise admin.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
            language?: string,
            // The ID of the permission.
            permissionId: string,
        }) : gapi.client.Request<Permission>;        
        
    }
    
    
    interface ProductsResource {
        // Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000.
        // 
        // To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design.
        approve (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<void>;        
        
        // Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product.
        // 
        // Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day.
        generateApprovalUrl (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".
            languageCode?: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<ProductsGenerateApprovalUrlResponse>;        
        
        // Retrieves details of a product for display to an enterprise admin.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
            language?: string,
            // The ID of the product, e.g. "app:com.google.android.gm".
            productId: string,
        }) : gapi.client.Request<Product>;        
        
        // Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
        getAppRestrictionsSchema (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
            language?: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<AppRestrictionsSchema>;        
        
        // Retrieves the Android app permissions required by this app.
        getPermissions (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<ProductPermissions>;        
        
        // Finds approved products that match a query, or all approved products if there is no query.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.
            approved?: boolean,
            // The ID of the enterprise.
            enterpriseId: string,
            // The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.
            language?: string,
            // Specifies the maximum number of products that can be returned per request. If not specified, uses a default value of 100, which is also the maximum retrievable within a single response.
            maxResults?: number,
            // The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).
            query?: string,
            // A pagination token is contained in a request''s response when there are more products. The token can be used in a subsequent request to obtain more products, and so forth. This parameter cannot be used in the initial request.
            token?: string,
        }) : gapi.client.Request<ProductsListResponse>;        
        
        // Unapproves the specified product (and the relevant app permissions, if any)
        unapprove (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the product.
            productId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface ServiceaccountkeysResource {
        // Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the key.
            keyId: string,
        }) : gapi.client.Request<void>;        
        
        // Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
        // 
        // Only the type of the key should be populated in the resource to be inserted.
        insert (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<ServiceAccountKey>;        
        
        // Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<ServiceAccountKeysListResponse>;        
        
    }
    
    
    interface StorelayoutclustersResource {
        // Deletes a cluster.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the cluster.
            clusterId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves details of a cluster.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the cluster.
            clusterId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StoreCluster>;        
        
        // Inserts a new cluster in a page.
        insert (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StoreCluster>;        
        
        // Retrieves the details of all clusters on the specified page.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StoreLayoutClustersListResponse>;        
        
        // Updates a cluster. This method supports patch semantics.
        patch (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the cluster.
            clusterId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StoreCluster>;        
        
        // Updates a cluster.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the cluster.
            clusterId: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StoreCluster>;        
        
    }
    
    
    interface StorelayoutpagesResource {
        // Deletes a store page.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<void>;        
        
        // Retrieves details of a store page.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StorePage>;        
        
        // Inserts a new store page.
        insert (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<StorePage>;        
        
        // Retrieves the details of all pages in the store.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<StoreLayoutPagesListResponse>;        
        
        // Updates the content of a store page. This method supports patch semantics.
        patch (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StorePage>;        
        
        // Updates the content of a store page.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the page.
            pageId: string,
        }) : gapi.client.Request<StorePage>;        
        
    }
    
    
    interface UsersResource {
        // Deleted an EMM-managed user.
        delete (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes.
        // 
        // This call only works with EMM-managed accounts.
        generateAuthenticationToken (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<AuthenticationToken>;        
        
        // Generates a token (activation code) to allow this user to configure their managed account in the Android Setup Wizard. Revokes any previously generated token.
        // 
        // This call only works with Google managed accounts.
        generateToken (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<UserToken>;        
        
        // Retrieves a user's details.
        get (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<User>;        
        
        // Retrieves the set of products a user is entitled to access.
        getAvailableProductSet (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ProductSet>;        
        
        // Creates a new EMM-managed user.
        // 
        // The Users resource passed in the body of the request should include an accountIdentifier and an accountType.
        // If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
        insert (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<User>;        
        
        // Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
        list (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The exact primary email address of the user to look up.
            email: string,
            // The ID of the enterprise.
            enterpriseId: string,
        }) : gapi.client.Request<UsersListResponse>;        
        
        // Updates the details of an EMM-managed user.
        // 
        // Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value. This method supports patch semantics.
        patch (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<User>;        
        
        // Revokes a previously generated token (activation code) for the user.
        revokeToken (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<void>;        
        
        // Modifies the set of products that a user is entitled to access (referred to as whitelisted products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted.
        setAvailableProductSet (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<ProductSet>;        
        
        // Updates the details of an EMM-managed user.
        // 
        // Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.
        update (request: {        
            // Data format for the response.
            alt?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
            quotaUser?: string,
            // IP address of the site where the request originates. Use this if you want to enforce per-user limits.
            userIp?: string,
            // The ID of the enterprise.
            enterpriseId: string,
            // The ID of the user.
            userId: string,
        }) : gapi.client.Request<User>;        
        
    }
    
}

declare module gapi.client.androidenterprise {
    var devices: gapi.client.androidenterprise.DevicesResource; 
    
    var enterprises: gapi.client.androidenterprise.EnterprisesResource; 
    
    var entitlements: gapi.client.androidenterprise.EntitlementsResource; 
    
    var grouplicenses: gapi.client.androidenterprise.GrouplicensesResource; 
    
    var grouplicenseusers: gapi.client.androidenterprise.GrouplicenseusersResource; 
    
    var installs: gapi.client.androidenterprise.InstallsResource; 
    
    var managedconfigurationsfordevice: gapi.client.androidenterprise.ManagedconfigurationsfordeviceResource; 
    
    var managedconfigurationsforuser: gapi.client.androidenterprise.ManagedconfigurationsforuserResource; 
    
    var permissions: gapi.client.androidenterprise.PermissionsResource; 
    
    var products: gapi.client.androidenterprise.ProductsResource; 
    
    var serviceaccountkeys: gapi.client.androidenterprise.ServiceaccountkeysResource; 
    
    var storelayoutclusters: gapi.client.androidenterprise.StorelayoutclustersResource; 
    
    var storelayoutpages: gapi.client.androidenterprise.StorelayoutpagesResource; 
    
    var users: gapi.client.androidenterprise.UsersResource; 
    
}
