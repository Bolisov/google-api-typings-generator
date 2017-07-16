// Type definitions for Google Google Play Developer API v2
// Project: https://developers.google.com/android-publisher
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.androidpublisher {
    
    interface Apk {
        // Information about the binary payload of this APK.
        binary?: ApkBinary,
        // The version code of the APK, as specified in the APK's manifest file.
        versionCode?: number,
    }
    
    interface ApkBinary {
        // A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command.
        sha1?: string,
    }
    
    interface ApkListing {
        // The language code, in BCP 47 format (eg "en-US").
        language?: string,
        // Describe what's new in your APK.
        recentChanges?: string,
    }
    
    interface ApkListingsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apkListingsListResponse".
        kind?: string,
        // 
        listings?: ApkListing[],        
    }
    
    interface ApksAddExternallyHostedRequest {
        // The definition of the externally-hosted APK and where it is located.
        externallyHostedApk?: ExternallyHostedApk,
    }
    
    interface ApksAddExternallyHostedResponse {
        // The definition of the externally-hosted APK and where it is located.
        externallyHostedApk?: ExternallyHostedApk,
    }
    
    interface ApksListResponse {
        // 
        apks?: Apk[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidpublisher#apksListResponse".
        kind?: string,
    }
    
    interface AppDetails {
        // The user-visible support email for this app.
        contactEmail?: string,
        // The user-visible support telephone number for this app.
        contactPhone?: string,
        // The user-visible website for this app.
        contactWebsite?: string,
        // Default language code, in BCP 47 format (eg "en-US").
        defaultLanguage?: string,
    }
    
    interface AppEdit {
        // The time at which the edit will expire and will be no longer valid for use in any subsequent API calls (encoded as seconds since the Epoch).
        expiryTimeSeconds?: string,
        // The ID of the edit that can be used in subsequent API calls.
        id?: string,
    }
    
    interface Comment {
        // A comment from a developer.
        developerComment?: DeveloperComment,
        // A comment from a user.
        userComment?: UserComment,
    }
    
    interface DeobfuscationFile {
        // The type of the deobfuscation file.
        symbolType?: string,
    }
    
    interface DeobfuscationFilesUploadResponse {
        // 
        deobfuscationFile?: DeobfuscationFile,
    }
    
    interface DeveloperComment {
        // The last time at which this comment was updated.
        lastModified?: Timestamp,
        // The content of the comment, i.e. reply body.
        text?: string,
    }
    
    interface DeviceMetadata {
        // Device CPU make e.g. "Qualcomm"
        cpuMake?: string,
        // Device CPU model e.g. "MSM8974"
        cpuModel?: string,
        // Device class (e.g. tablet)
        deviceClass?: string,
        // OpenGL version
        glEsVersion?: number,
        // Device manufacturer (e.g. Motorola)
        manufacturer?: string,
        // Comma separated list of native platforms (e.g. "arm", "arm7")
        nativePlatform?: string,
        // Device model name (e.g. Droid)
        productName?: string,
        // Device RAM in Megabytes e.g. "2048"
        ramMb?: number,
        // Screen density in DPI
        screenDensityDpi?: number,
        // Screen height in pixels
        screenHeightPx?: number,
        // Screen width in pixels
        screenWidthPx?: number,
    }
    
    interface Entitlement {
        // This kind represents an entitlement object in the androidpublisher service.
        kind?: string,
        // The SKU of the product.
        productId?: string,
        // The type of the inapp product. Possible values are:  
        // - In-app item: "inapp" 
        // - Subscription: "subs"
        productType?: string,
        // The token which can be verified using the subscriptions or products API.
        token?: string,
    }
    
    interface EntitlementsListResponse {
        // 
        pageInfo?: PageInfo,
        // 
        resources?: Entitlement[],        
        // 
        tokenPagination?: TokenPagination,
    }
    
    interface ExpansionFile {
        // If set this field indicates that this APK has an Expansion File uploaded to it: this APK does not reference another APK's Expansion File. The field's value is the size of the uploaded Expansion File in bytes.
        fileSize?: string,
        // If set this APK's Expansion File references another APK's Expansion File. The file_size field will not be set.
        referencesVersion?: number,
    }
    
    interface ExpansionFilesUploadResponse {
        // 
        expansionFile?: ExpansionFile,
    }
    
    interface ExternallyHostedApk {
        // The application label.
        applicationLabel?: string,
        // A certificate (or array of certificates if a certificate-chain is used) used to signed this APK, represented as a base64 encoded byte array.
        certificateBase64s?: string[],        
        // The URL at which the APK is hosted. This must be an https URL.
        externallyHostedUrl?: string,
        // The SHA1 checksum of this APK, represented as a base64 encoded byte array.
        fileSha1Base64?: string,
        // The SHA256 checksum of this APK, represented as a base64 encoded byte array.
        fileSha256Base64?: string,
        // The file size in bytes of this APK.
        fileSize?: string,
        // The icon image from the APK, as a base64 encoded byte array.
        iconBase64?: string,
        // The maximum SDK supported by this APK (optional).
        maximumSdk?: number,
        // The minimum SDK targeted by this APK.
        minimumSdk?: number,
        // The native code environments supported by this APK (optional).
        nativeCodes?: string[],        
        // The package name.
        packageName?: string,
        // The features required by this APK (optional).
        usesFeatures?: string[],        
        // The permissions requested by this APK.
        usesPermissions?: ExternallyHostedApkUsesPermission[],        
        // The version code of this APK.
        versionCode?: number,
        // The version name of this APK.
        versionName?: string,
    }
    
    interface ExternallyHostedApkUsesPermission {
        // Optionally, the maximum SDK version for which the permission is required.
        maxSdkVersion?: number,
        // The name of the permission requested.
        name?: string,
    }
    
    interface Image {
        // A unique id representing this image.
        id?: string,
        // A sha1 hash of the image that was uploaded.
        sha1?: string,
        // A URL that will serve a preview of the image.
        url?: string,
    }
    
    interface ImagesDeleteAllResponse {
        // 
        deleted?: Image[],        
    }
    
    interface ImagesListResponse {
        // 
        images?: Image[],        
    }
    
    interface ImagesUploadResponse {
        // 
        image?: Image,
    }
    
    interface InAppProduct {
        // The default language of the localized data, as defined by BCP 47. e.g. "en-US", "en-GB".
        defaultLanguage?: string,
        // Default price cannot be zero. In-app products can never be free. Default price is always in the developer's Checkout merchant currency.
        defaultPrice?: Price,
        // List of localized title and description data.
        listings?: any,
        // The package name of the parent app.
        packageName?: string,
        // Prices per buyer region. None of these prices should be zero. In-app products can never be free.
        prices?: any,
        // Purchase type enum value. Unmodifiable after creation.
        purchaseType?: string,
        // Definition of a season for a seasonal subscription. Can be defined only for yearly subscriptions.
        season?: Season,
        // The stock-keeping-unit (SKU) of the product, unique within an app.
        sku?: string,
        // 
        status?: string,
        // Subscription period, specified in ISO 8601 format. Acceptable values are "P1W" (one week), "P1M" (one month), "P3M" (three months), "P6M" (six months), and "P1Y" (one year).
        subscriptionPeriod?: string,
        // Trial period, specified in ISO 8601 format. Acceptable values are anything between "P7D" (seven days) and "P999D" (999 days). Seasonal subscriptions cannot have a trial period.
        trialPeriod?: string,
    }
    
    interface InAppProductListing {
        // 
        description?: string,
        // 
        title?: string,
    }
    
    interface InappproductsBatchRequest {
        // 
        entrys?: InappproductsBatchRequestEntry[],        
    }
    
    interface InappproductsBatchRequestEntry {
        // 
        batchId?: number,
        // 
        inappproductsinsertrequest?: InappproductsInsertRequest,
        // 
        inappproductsupdaterequest?: InappproductsUpdateRequest,
        // 
        methodName?: string,
    }
    
    interface InappproductsBatchResponse {
        // 
        entrys?: InappproductsBatchResponseEntry[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsBatchResponse".
        kind?: string,
    }
    
    interface InappproductsBatchResponseEntry {
        // 
        batchId?: number,
        // 
        inappproductsinsertresponse?: InappproductsInsertResponse,
        // 
        inappproductsupdateresponse?: InappproductsUpdateResponse,
    }
    
    interface InappproductsInsertRequest {
        // 
        inappproduct?: InAppProduct,
    }
    
    interface InappproductsInsertResponse {
        // 
        inappproduct?: InAppProduct,
    }
    
    interface InappproductsListResponse {
        // 
        inappproduct?: InAppProduct[],        
        // Identifies what kind of resource this is. Value: the fixed string "androidpublisher#inappproductsListResponse".
        kind?: string,
        // 
        pageInfo?: PageInfo,
        // 
        tokenPagination?: TokenPagination,
    }
    
    interface InappproductsUpdateRequest {
        // 
        inappproduct?: InAppProduct,
    }
    
    interface InappproductsUpdateResponse {
        // 
        inappproduct?: InAppProduct,
    }
    
    interface Listing {
        // Full description of the app; this may be up to 4000 characters in length.
        fullDescription?: string,
        // Language localization code (for example, "de-AT" for Austrian German).
        language?: string,
        // Short description of the app (previously known as promo text); this may be up to 80 characters in length.
        shortDescription?: string,
        // App's localized title.
        title?: string,
        // URL of a promotional YouTube video for the app.
        video?: string,
    }
    
    interface ListingsListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidpublisher#listingsListResponse".
        kind?: string,
        // 
        listings?: Listing[],        
    }
    
    interface MonthDay {
        // Day of a month, value in [1, 31] range. Valid range depends on the specified month.
        day?: number,
        // Month of a year. e.g. 1 = JAN, 2 = FEB etc.
        month?: number,
    }
    
    interface PageInfo {
        // 
        resultPerPage?: number,
        // 
        startIndex?: number,
        // 
        totalResults?: number,
    }
    
    interface Price {
        // 3 letter Currency code, as defined by ISO 4217.
        currency?: string,
        // The price in millionths of the currency base unit represented as a string.
        priceMicros?: string,
    }
    
    interface ProductPurchase {
        // The consumption state of the inapp product. Possible values are:  
        // - Yet to be consumed 
        // - Consumed
        consumptionState?: number,
        // A developer-specified string that contains supplemental information about an order.
        developerPayload?: string,
        // This kind represents an inappPurchase object in the androidpublisher service.
        kind?: string,
        // The purchase state of the order. Possible values are:  
        // - Purchased 
        // - Cancelled
        purchaseState?: number,
        // The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
        purchaseTimeMillis?: string,
    }
    
    interface Prorate {
        // Default price cannot be zero and must be less than the full subscription price. Default price is always in the developer's Checkout merchant currency. Targeted countries have their prices set automatically based on the default_price.
        defaultPrice?: Price,
        // Defines the first day on which the price takes effect.
        start?: MonthDay,
    }
    
    interface Review {
        // The name of the user who wrote the review.
        authorName?: string,
        // A repeated field containing comments for the review.
        comments?: Comment[],        
        // Unique identifier for this review.
        reviewId?: string,
    }
    
    interface ReviewReplyResult {
        // The time at which the reply took effect.
        lastEdited?: Timestamp,
        // The reply text that was applied.
        replyText?: string,
    }
    
    interface ReviewsListResponse {
        // 
        pageInfo?: PageInfo,
        // 
        reviews?: Review[],        
        // 
        tokenPagination?: TokenPagination,
    }
    
    interface ReviewsReplyRequest {
        // The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped.
        replyText?: string,
    }
    
    interface ReviewsReplyResponse {
        // 
        result?: ReviewReplyResult,
    }
    
    interface Season {
        // Inclusive end date of the recurrence period.
        end?: MonthDay,
        // Optionally present list of prorations for the season. Each proration is a one-off discounted entry into a subscription. Each proration contains the first date on which the discount is available and the new pricing information.
        prorations?: Prorate[],        
        // Inclusive start date of the recurrence period.
        start?: MonthDay,
    }
    
    interface SubscriptionDeferralInfo {
        // The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription.
        desiredExpiryTimeMillis?: string,
        // The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur.
        expectedExpiryTimeMillis?: string,
    }
    
    interface SubscriptionPurchase {
        // Whether the subscription will automatically be renewed when it reaches its current expiry time.
        autoRenewing?: boolean,
        // The reason why a subscription was cancelled or is not auto-renewing. Possible values are:  
        // - User cancelled the subscription 
        // - Subscription was cancelled by the system, for example because of a billing problem
        cancelReason?: number,
        // ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.
        countryCode?: string,
        // A developer-specified string that contains supplemental information about an order.
        developerPayload?: string,
        // Time at which the subscription will expire, in milliseconds since the Epoch.
        expiryTimeMillis?: string,
        // This kind represents a subscriptionPurchase object in the androidpublisher service.
        kind?: string,
        // The payment state of the subscription. Possible values are:  
        // - Payment pending 
        // - Payment received
        paymentState?: number,
        // Price of the subscription, not including tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
        priceAmountMicros?: string,
        // ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".
        priceCurrencyCode?: string,
        // Time at which the subscription was granted, in milliseconds since the Epoch.
        startTimeMillis?: string,
        // The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0.
        userCancellationTimeMillis?: string,
    }
    
    interface SubscriptionPurchasesDeferRequest {
        // The information about the new desired expiry time for the subscription.
        deferralInfo?: SubscriptionDeferralInfo,
    }
    
    interface SubscriptionPurchasesDeferResponse {
        // The new expiry time for the subscription in milliseconds since the Epoch.
        newExpiryTimeMillis?: string,
    }
    
    interface Testers {
        // 
        googleGroups?: string[],        
        // 
        googlePlusCommunities?: string[],        
    }
    
    interface Timestamp {
        // 
        nanos?: number,
        // 
        seconds?: string,
    }
    
    interface TokenPagination {
        // 
        nextPageToken?: string,
        // 
        previousPageToken?: string,
    }
    
    interface Track {
        // 
        track?: string,
        // 
        userFraction?: number,
        // 
        versionCodes?: number[],        
    }
    
    interface TracksListResponse {
        // Identifies what kind of resource this is. Value: the fixed string "androidpublisher#tracksListResponse".
        kind?: string,
        // 
        tracks?: Track[],        
    }
    
    interface UserComment {
        // Integer Android SDK version of the user's device at the time the review was written, e.g. 23 is Marshmallow. May be absent.
        androidOsVersion?: number,
        // Integer version code of the app as installed at the time the review was written. May be absent.
        appVersionCode?: number,
        // String version name of the app as installed at the time the review was written. May be absent.
        appVersionName?: string,
        // Codename for the reviewer's device, e.g. klte, flounder. May be absent.
        device?: string,
        // Some information about the characteristics of the user's device
        deviceMetadata?: DeviceMetadata,
        // The last time at which this comment was updated.
        lastModified?: Timestamp,
        // Untranslated text of the review, in the case where the review has been translated. If the review has not been translated this is left blank.
        originalText?: string,
        // Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent.
        reviewerLanguage?: string,
        // The star rating associated with the review, from 1 to 5.
        starRating?: number,
        // The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character.
        text?: string,
        // Number of users who have given this review a thumbs down
        thumbsDownCount?: number,
        // Number of users who have given this review a thumbs up
        thumbsUpCount?: number,
    }
    
    interface VoidedPurchase {
        // This kind represents a voided purchase object in the androidpublisher service.
        kind?: string,
        // The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970).
        purchaseTimeMillis?: string,
        // The token that was generated when a purchase was made. This uniquely identifies a purchase.
        purchaseToken?: string,
        // The time at which the purchase was cancelled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970).
        voidedTimeMillis?: string,
    }
    
    interface VoidedPurchasesListResponse {
        // 
        pageInfo?: PageInfo,
        // 
        tokenPagination?: TokenPagination,
        // 
        voidedPurchases?: VoidedPurchase[],        
    }
    
    interface ApklistingsResource {
        // Deletes the APK-specific localized listing for a specified APK and language code.
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
            // The APK version code whose APK-specific listings should be read or modified.
            apkVersionCode: number,
            // Unique identifier for this edit.
            editId: string,
            // The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<void>;        
        
        // Deletes all the APK-specific localized listings for a specified APK.
        deleteall (request: {        
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
            // The APK version code whose APK-specific listings should be read or modified.
            apkVersionCode: number,
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<void>;        
        
        // Fetches the APK-specific localized listing for a specified APK and language code.
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
            // The APK version code whose APK-specific listings should be read or modified.
            apkVersionCode: number,
            // Unique identifier for this edit.
            editId: string,
            // The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ApkListing>;        
        
        // Lists all the APK-specific localized listings for a specified APK.
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
            // The APK version code whose APK-specific listings should be read or modified.
            apkVersionCode: number,
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ApkListingsListResponse>;        
        
        // Updates or creates the APK-specific localized listing for a specified APK and language code. This method supports patch semantics.
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
            // The APK version code whose APK-specific listings should be read or modified.
            apkVersionCode: number,
            // Unique identifier for this edit.
            editId: string,
            // The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ApkListing>;        
        
        // Updates or creates the APK-specific localized listing for a specified APK and language code.
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
            // The APK version code whose APK-specific listings should be read or modified.
            apkVersionCode: number,
            // Unique identifier for this edit.
            editId: string,
            // The language code (a BCP-47 language tag) of the APK-specific localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ApkListing>;        
        
    }
    
    
    interface ApksResource {
        // Creates a new APK without uploading the APK itself to Google Play, instead hosting the APK at a specified URL. This function is only available to enterprises using Google Play for Work whose application is configured to restrict distribution to the enterprise domain.
        addexternallyhosted (request: {        
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ApksAddExternallyHostedResponse>;        
        
        // 
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ApksListResponse>;        
        
        // 
        upload (request: {        
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<Apk>;        
        
    }
    
    
    interface DeobfuscationfilesResource {
        // Uploads the deobfuscation file of the specified APK. If a deobfuscation file already exists, it will be replaced.
        upload (request: {        
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
            // The version code of the APK whose deobfuscation file is being uploaded.
            apkVersionCode: number,
            // 
            deobfuscationFileType: string,
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier of the Android app for which the deobfuscatiuon files are being uploaded; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<DeobfuscationFilesUploadResponse>;        
        
    }
    
    
    interface DetailsResource {
        // Fetches app details for this edit. This includes the default language and developer support contact information.
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<AppDetails>;        
        
        // Updates app details for this edit. This method supports patch semantics.
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<AppDetails>;        
        
        // Updates app details for this edit.
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<AppDetails>;        
        
    }
    
    
    interface ExpansionfilesResource {
        // Fetches the Expansion File configuration for the APK specified.
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
            // The version code of the APK whose Expansion File configuration is being read or modified.
            apkVersionCode: number,
            // Unique identifier for this edit.
            editId: string,
            // 
            expansionFileType: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ExpansionFile>;        
        
        // Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method. This method supports patch semantics.
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
            // The version code of the APK whose Expansion File configuration is being read or modified.
            apkVersionCode: number,
            // Unique identifier for this edit.
            editId: string,
            // 
            expansionFileType: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ExpansionFile>;        
        
        // Updates the APK's Expansion File configuration to reference another APK's Expansion Files. To add a new Expansion File use the Upload method.
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
            // The version code of the APK whose Expansion File configuration is being read or modified.
            apkVersionCode: number,
            // Unique identifier for this edit.
            editId: string,
            // 
            expansionFileType: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ExpansionFile>;        
        
        // Uploads and attaches a new Expansion File to the APK specified.
        upload (request: {        
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
            // The version code of the APK whose Expansion File configuration is being read or modified.
            apkVersionCode: number,
            // Unique identifier for this edit.
            editId: string,
            // 
            expansionFileType: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ExpansionFilesUploadResponse>;        
        
    }
    
    
    interface ImagesResource {
        // Deletes the image (specified by id) from the edit.
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier an image within the set of images attached to this edit.
            imageId: string,
            // 
            imageType: string,
            // The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<void>;        
        
        // Deletes all images for the specified language and image type.
        deleteall (request: {        
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
            // Unique identifier for this edit.
            editId: string,
            // 
            imageType: string,
            // The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ImagesDeleteAllResponse>;        
        
        // Lists all images for the specified language and image type.
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
            // Unique identifier for this edit.
            editId: string,
            // 
            imageType: string,
            // The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ImagesListResponse>;        
        
        // Uploads a new image and adds it to the list of images for the specified language and image type.
        upload (request: {        
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
            // Unique identifier for this edit.
            editId: string,
            // 
            imageType: string,
            // The language code (a BCP-47 language tag) of the localized listing whose images are to read or modified. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ImagesUploadResponse>;        
        
    }
    
    
    interface ListingsResource {
        // Deletes the specified localized store listing from an edit.
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
            // Unique identifier for this edit.
            editId: string,
            // The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<void>;        
        
        // Deletes all localized listings from an edit.
        deleteall (request: {        
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<void>;        
        
        // Fetches information about a localized store listing.
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
            // Unique identifier for this edit.
            editId: string,
            // The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<Listing>;        
        
        // Returns all of the localized store listings attached to this edit.
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<ListingsListResponse>;        
        
        // Creates or updates a localized store listing. This method supports patch semantics.
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
            // Unique identifier for this edit.
            editId: string,
            // The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<Listing>;        
        
        // Creates or updates a localized store listing.
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
            // Unique identifier for this edit.
            editId: string,
            // The language code (a BCP-47 language tag) of the localized listing to read or modify. For example, to select Austrian German, pass "de-AT".
            language: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<Listing>;        
        
    }
    
    
    interface TestersResource {
        // 
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
            // 
            track: string,
        }) : gapi.client.Request<Testers>;        
        
        // 
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
            // 
            track: string,
        }) : gapi.client.Request<Testers>;        
        
        // 
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
            // 
            track: string,
        }) : gapi.client.Request<Testers>;        
        
    }
    
    
    interface TracksResource {
        // Fetches the track configuration for the specified track type. Includes the APK version codes that are in this track.
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
            // The track type to read or modify.
            track: string,
        }) : gapi.client.Request<Track>;        
        
        // Lists all the track configurations for this edit.
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<TracksListResponse>;        
        
        // Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume. This method supports patch semantics.
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
            // The track type to read or modify.
            track: string,
        }) : gapi.client.Request<Track>;        
        
        // Updates the track configuration for the specified track type. When halted, the rollout track cannot be updated without adding new APKs, and adding new APKs will cause it to resume.
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
            // The track type to read or modify.
            track: string,
        }) : gapi.client.Request<Track>;        
        
    }
    
    
    interface EditsResource {
        // Commits/applies the changes made in this edit back to the app.
        commit (request: {        
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<AppEdit>;        
        
        // Deletes an edit for an app. Creating a new edit will automatically delete any of your previous edits so this method need only be called if you want to preemptively abandon an edit.
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<void>;        
        
        // Returns information about the edit specified. Calls will fail if the edit is no long active (e.g. has been deleted, superseded or expired).
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<AppEdit>;        
        
        // Creates a new edit for an app, populated with the app's current state.
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
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<AppEdit>;        
        
        // Checks that the edit can be successfully committed. The edit's changes are not applied to the live app.
        validate (request: {        
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
            // Unique identifier for this edit.
            editId: string,
            // Unique identifier for the Android app that is being updated; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<AppEdit>;        
        
        apklistings: ApklistingsResource,
        apks: ApksResource,
        deobfuscationfiles: DeobfuscationfilesResource,
        details: DetailsResource,
        expansionfiles: ExpansionfilesResource,
        images: ImagesResource,
        listings: ListingsResource,
        testers: TestersResource,
        tracks: TracksResource,
    }
    
    
    interface EntitlementsResource {
        // Lists the user's current inapp item or subscription entitlements
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
            // 
            maxResults?: number,
            // The package name of the application the inapp product was sold in (for example, 'com.some.thing').
            packageName: string,
            // The product id of the inapp product (for example, 'sku1'). This can be used to restrict the result set.
            productId?: string,
            // 
            startIndex?: number,
            // 
            token?: string,
        }) : gapi.client.Request<EntitlementsListResponse>;        
        
    }
    
    
    interface InappproductsResource {
        // 
        batch (request: {        
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
        }) : gapi.client.Request<InappproductsBatchResponse>;        
        
        // Delete an in-app product for an app.
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
            // Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
            packageName: string,
            // Unique identifier for the in-app product.
            sku: string,
        }) : gapi.client.Request<void>;        
        
        // Returns information about the in-app product specified.
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
            // 
            packageName: string,
            // Unique identifier for the in-app product.
            sku: string,
        }) : gapi.client.Request<InAppProduct>;        
        
        // Creates a new in-app product for an app.
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
            // If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
            autoConvertMissingPrices?: boolean,
            // Unique identifier for the Android app; for example, "com.spiffygame".
            packageName: string,
        }) : gapi.client.Request<InAppProduct>;        
        
        // List all the in-app products for an Android app, both subscriptions and managed in-app products..
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
            // 
            maxResults?: number,
            // Unique identifier for the Android app with in-app products; for example, "com.spiffygame".
            packageName: string,
            // 
            startIndex?: number,
            // 
            token?: string,
        }) : gapi.client.Request<InappproductsListResponse>;        
        
        // Updates the details of an in-app product. This method supports patch semantics.
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
            // If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
            autoConvertMissingPrices?: boolean,
            // Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
            packageName: string,
            // Unique identifier for the in-app product.
            sku: string,
        }) : gapi.client.Request<InAppProduct>;        
        
        // Updates the details of an in-app product.
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
            // If true the prices for all regions targeted by the parent app that don't have a price specified for this in-app product will be auto converted to the target currency based on the default price. Defaults to false.
            autoConvertMissingPrices?: boolean,
            // Unique identifier for the Android app with the in-app product; for example, "com.spiffygame".
            packageName: string,
            // Unique identifier for the in-app product.
            sku: string,
        }) : gapi.client.Request<InAppProduct>;        
        
    }
    
    
    interface ProductsResource {
        // Checks the purchase and consumption status of an inapp item.
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
            // The package name of the application the inapp product was sold in (for example, 'com.some.thing').
            packageName: string,
            // The inapp product SKU (for example, 'com.some.thing.inapp1').
            productId: string,
            // The token provided to the user's device when the inapp product was purchased.
            token: string,
        }) : gapi.client.Request<ProductPurchase>;        
        
    }
    
    
    interface SubscriptionsResource {
        // Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
        cancel (request: {        
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
            // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
            packageName: string,
            // The purchased subscription ID (for example, 'monthly001').
            subscriptionId: string,
            // The token provided to the user's device when the subscription was purchased.
            token: string,
        }) : gapi.client.Request<void>;        
        
        // Defers a user's subscription purchase until a specified future expiration time.
        defer (request: {        
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
            // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
            packageName: string,
            // The purchased subscription ID (for example, 'monthly001').
            subscriptionId: string,
            // The token provided to the user's device when the subscription was purchased.
            token: string,
        }) : gapi.client.Request<SubscriptionPurchasesDeferResponse>;        
        
        // Checks whether a user's subscription purchase is valid and returns its expiry time.
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
            // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
            packageName: string,
            // The purchased subscription ID (for example, 'monthly001').
            subscriptionId: string,
            // The token provided to the user's device when the subscription was purchased.
            token: string,
        }) : gapi.client.Request<SubscriptionPurchase>;        
        
        // Refunds a user's subscription purchase, but the subscription remains valid until its expiration time and it will continue to recur.
        refund (request: {        
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
            // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
            packageName: string,
            // The purchased subscription ID (for example, 'monthly001').
            subscriptionId: string,
            // The token provided to the user's device when the subscription was purchased.
            token: string,
        }) : gapi.client.Request<void>;        
        
        // Refunds and immediately revokes a user's subscription purchase. Access to the subscription will be terminated immediately and it will stop recurring.
        revoke (request: {        
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
            // The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
            packageName: string,
            // The purchased subscription ID (for example, 'monthly001').
            subscriptionId: string,
            // The token provided to the user's device when the subscription was purchased.
            token: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface VoidedpurchasesResource {
        // Lists the purchases that were cancelled, refunded or charged-back.
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
            // The time, in milliseconds since the Epoch, of the newest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be greater than the current time and is ignored if a pagination token is set. Default value is current time.
            endTime?: string,
            // 
            maxResults?: number,
            // The package name of the application for which voided purchases need to be returned (for example, 'com.some.thing').
            packageName: string,
            // 
            startIndex?: number,
            // The time, in milliseconds since the Epoch, of the oldest voided in-app product purchase that you want to see in the response. The value of this parameter cannot be older than 30 days and is ignored if a pagination token is set. Default value is current time minus 30 days.
            startTime?: string,
            // 
            token?: string,
        }) : gapi.client.Request<VoidedPurchasesListResponse>;        
        
    }
    
    
    interface PurchasesResource {
        products: ProductsResource,
        subscriptions: SubscriptionsResource,
        voidedpurchases: VoidedpurchasesResource,
    }
    
    
    interface ReviewsResource {
        // Returns a single review.
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
            // Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
            packageName: string,
            // 
            reviewId: string,
            // 
            translationLanguage?: string,
        }) : gapi.client.Request<Review>;        
        
        // Returns a list of reviews. Only reviews from last week will be returned.
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
            // 
            maxResults?: number,
            // Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
            packageName: string,
            // 
            startIndex?: number,
            // 
            token?: string,
            // 
            translationLanguage?: string,
        }) : gapi.client.Request<ReviewsListResponse>;        
        
        // Reply to a single review, or update an existing reply.
        reply (request: {        
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
            // Unique identifier for the Android app for which we want reviews; for example, "com.spiffygame".
            packageName: string,
            // 
            reviewId: string,
        }) : gapi.client.Request<ReviewsReplyResponse>;        
        
    }
    
}

declare module gapi.client.androidpublisher {
    var edits: gapi.client.androidpublisher.EditsResource; 
    
    var entitlements: gapi.client.androidpublisher.EntitlementsResource; 
    
    var inappproducts: gapi.client.androidpublisher.InappproductsResource; 
    
    var purchases: gapi.client.androidpublisher.PurchasesResource; 
    
    var reviews: gapi.client.androidpublisher.ReviewsResource; 
    
}
