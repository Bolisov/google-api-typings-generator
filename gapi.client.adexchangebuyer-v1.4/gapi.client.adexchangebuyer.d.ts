// Type definitions for Google Ad Exchange Buyer API v1.4
// Project: https://developers.google.com/ad-exchange/buyer-rest
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.adexchangebuyer {
    
    interface Account {
        // Your bidder locations that have distinct URLs.
        bidderLocation?: {        
            // The protocol that the bidder endpoint is using. OpenRTB protocols with prefix PROTOCOL_OPENRTB_PROTOBUF use proto buffer, otherwise use JSON.  Allowed values:  
            // - PROTOCOL_ADX 
            // - PROTOCOL_OPENRTB_2_2 
            // - PROTOCOL_OPENRTB_2_3 
            // - PROTOCOL_OPENRTB_2_4 
            // - PROTOCOL_OPENRTB_2_5 
            // - PROTOCOL_OPENRTB_PROTOBUF_2_3 
            // - PROTOCOL_OPENRTB_PROTOBUF_2_4 
            // - PROTOCOL_OPENRTB_PROTOBUF_2_5
            bidProtocol?: string,
            // The maximum queries per second the Ad Exchange will send.
            maximumQps?: number,
            // The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:  
            // - ASIA 
            // - EUROPE 
            // - US_EAST 
            // - US_WEST
            region?: string,
            // The URL to which the Ad Exchange will send bid requests.
            url?: string,
        }[],        
        // The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.
        cookieMatchingNid?: string,
        // The base URL used in cookie match requests.
        cookieMatchingUrl?: string,
        // Account id.
        id?: number,
        // Resource type.
        kind?: string,
        // The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.
        maximumActiveCreatives?: number,
        // The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
        maximumTotalQps?: number,
        // The number of creatives that this account inserted or bid with in the last 30 days.
        numberActiveCreatives?: number,
    }
    
    interface AccountsList {
        // A list of accounts.
        items?: Account[],        
        // Resource type.
        kind?: string,
    }
    
    interface AddOrderDealsRequest {
        // The list of deals to add
        deals?: MarketplaceDeal[],        
        // The last known proposal revision number.
        proposalRevisionNumber?: string,
        // Indicates an optional action to take on the proposal
        updateAction?: string,
    }
    
    interface AddOrderDealsResponse {
        // List of deals added (in the same proposal as passed in the request)
        deals?: MarketplaceDeal[],        
        // The updated revision number for the proposal.
        proposalRevisionNumber?: string,
    }
    
    interface AddOrderNotesRequest {
        // The list of notes to add.
        notes?: MarketplaceNote[],        
    }
    
    interface AddOrderNotesResponse {
        // 
        notes?: MarketplaceNote[],        
    }
    
    interface BillingInfo {
        // Account id.
        accountId?: number,
        // Account name.
        accountName?: string,
        // A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account.
        billingId?: string[],        
        // Resource type.
        kind?: string,
    }
    
    interface BillingInfoList {
        // A list of billing info relevant for your account.
        items?: BillingInfo[],        
        // Resource type.
        kind?: string,
    }
    
    interface Budget {
        // The id of the account. This is required for get and update requests.
        accountId?: string,
        // The billing id to determine which adgroup to provide budget information for. This is required for get and update requests.
        billingId?: string,
        // The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests.
        budgetAmount?: string,
        // The currency code for the buyer. This cannot be altered here.
        currencyCode?: string,
        // The unique id that describes this item.
        id?: string,
        // The kind of the resource, i.e. "adexchangebuyer#budget".
        kind?: string,
    }
    
    interface Buyer {
        // Adx account id of the buyer.
        accountId?: string,
    }
    
    interface ContactInformation {
        // Email address of the contact.
        email?: string,
        // The name of the contact.
        name?: string,
    }
    
    interface CreateOrdersRequest {
        // The list of proposals to create.
        proposals?: Proposal[],        
        // Web property id of the seller creating these orders
        webPropertyCode?: string,
    }
    
    interface CreateOrdersResponse {
        // The list of proposals successfully created.
        proposals?: Proposal[],        
    }
    
    interface Creative {
        // The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set.
        HTMLSnippet?: string,
        // Account id.
        accountId?: number,
        // The link to the Ad Preferences page. This is only supported for native ads.
        adChoicesDestinationUrl?: string,
        // Detected advertiser id, if any. Read-only. This field should not be set in requests.
        advertiserId?: string[],        
        // The name of the company being advertised in the creative. The value provided must exist in the advertisers.txt file.
        advertiserName?: string,
        // The agency id for this creative.
        agencyId?: string,
        // The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp).
        apiUploadTimestamp?: string,
        // List of buyer selectable attributes for the ads that may be shown from this snippet. Each attribute is represented by an integer as defined in  buyer-declarable-creative-attributes.txt.
        attribute?: number[],        
        // A buyer-specific id identifying the creative in this ad.
        buyerCreativeId?: string,
        // The set of destination urls for the snippet.
        clickThroughUrl?: string[],        
        // Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.
        corrections?: {        
            // All known serving contexts containing serving status information.
            contexts?: {            
                // Only set when contextType=AUCTION_TYPE. Represents the auction types this correction applies to.
                auctionType?: string[],                
                // The type of context (e.g., location, platform, auction type, SSL-ness).
                contextType?: string,
                // Only set when contextType=LOCATION. Represents the geo criterias this correction applies to.
                geoCriteriaId?: number[],                
                // Only set when contextType=PLATFORM. Represents the platforms this correction applies to.
                platform?: string[],                
            }[],            
            // Additional details about the correction.
            details?: string[],            
            // The type of correction that was applied to the creative.
            reason?: string,
        }[],        
        // Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly.
        dealsStatus?: string,
        // Detected domains for this creative. Read-only. This field should not be set in requests.
        detectedDomains?: string[],        
        // The filtering reasons for the creative. Read-only. This field should not be set in requests.
        filteringReasons?: {        
            // The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST.
            date?: string,
            // The filtering reasons.
            reasons?: {            
                // The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange.
                filteringCount?: string,
                // The filtering status code as defined in  creative-status-codes.txt.
                filteringStatus?: number,
            }[],            
        },        
        // Ad height.
        height?: number,
        // The set of urls to be called to record an impression.
        impressionTrackingUrl?: string[],        
        // Resource type.
        kind?: string,
        // Detected languages for this creative. Read-only. This field should not be set in requests.
        languages?: string[],        
        // If nativeAd is set, HTMLSnippet and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)
        nativeAd?: {        
            // 
            advertiser?: string,
            // The app icon, for app download ads.
            appIcon?: {            
                // 
                height?: number,
                // 
                url?: string,
                // 
                width?: number,
            },            
            // A long description of the ad.
            body?: string,
            // A label for the button that the user is supposed to click.
            callToAction?: string,
            // The URL that the browser/SDK will load when the user clicks the ad.
            clickLinkUrl?: string,
            // The URL to use for click tracking.
            clickTrackingUrl?: string,
            // A short title for the ad.
            headline?: string,
            // A large image.
            image?: {            
                // 
                height?: number,
                // 
                url?: string,
                // 
                width?: number,
            },            
            // The URLs are called when the impression is rendered.
            impressionTrackingUrl?: string[],            
            // A smaller image, for the advertiser logo.
            logo?: {            
                // 
                height?: number,
                // 
                url?: string,
                // 
                width?: number,
            },            
            // The price of the promoted app including the currency info.
            price?: string,
            // The app rating in the app store. Must be in the range [0-5].
            starRating?: number,
            // The URL to the app store to purchase/download the promoted app.
            store?: string,
            // The URL of the XML VAST for a native ad. Note this is a separate field from resource.video_url.
            videoURL?: string,
        },        
        // Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly.
        openAuctionStatus?: string,
        // Detected product categories, if any. Each category is represented by an integer as defined in  ad-product-categories.txt. Read-only. This field should not be set in requests.
        productCategories?: number[],        
        // All restricted categories for the ads that may be shown from this snippet. Each category is represented by an integer as defined in the  ad-restricted-categories.txt.
        restrictedCategories?: number[],        
        // Detected sensitive categories, if any. Each category is represented by an integer as defined in  ad-sensitive-categories.txt. Read-only. This field should not be set in requests.
        sensitiveCategories?: number[],        
        // The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction). Read-only. This field should not be set in requests. See the examples in the Creatives guide for more details.
        servingRestrictions?: {        
            // All known contexts/restrictions.
            contexts?: {            
                // Only set when contextType=AUCTION_TYPE. Represents the auction types this restriction applies to.
                auctionType?: string[],                
                // The type of context (e.g., location, platform, auction type, SSL-ness).
                contextType?: string,
                // Only set when contextType=LOCATION. Represents the geo criterias this restriction applies to. Impressions are considered to match a context if either the user location or publisher location matches a given geoCriteriaId.
                geoCriteriaId?: number[],                
                // Only set when contextType=PLATFORM. Represents the platforms this restriction applies to.
                platform?: string[],                
            }[],            
            // The reasons for disapproval within this restriction, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED or CONDITIONALLY_APPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue.
            disapprovalReasons?: {            
                // Additional details about the reason for disapproval.
                details?: string[],                
                // The categorized reason for disapproval.
                reason?: string,
            }[],            
            // Why the creative is ineligible to serve in this context (e.g., it has been explicitly disapproved or is pending review).
            reason?: string,
        }[],        
        // List of vendor types for the ads that may be shown from this snippet. Each vendor type is represented by an integer as defined in vendors.txt.
        vendorType?: number[],        
        // The version for this creative. Read-only. This field should not be set in requests.
        version?: number,
        // The URL to fetch a video ad. If set, HTMLSnippet and the nativeAd should not be set. Note, this is different from resource.native_ad.video_url above.
        videoURL?: string,
        // Ad width.
        width?: number,
    }
    
    interface CreativeDealIds {
        // A list of external deal ids and ARC approval status.
        dealStatuses?: {        
            // ARC approval status.
            arcStatus?: string,
            // External deal ID.
            dealId?: string,
            // Publisher ID.
            webPropertyId?: number,
        }[],        
        // Resource type.
        kind?: string,
    }
    
    interface CreativesList {
        // A list of creatives.
        items?: Creative[],        
        // Resource type.
        kind?: string,
        // Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this.
        nextPageToken?: string,
    }
    
    interface DealServingMetadata {
        // True if alcohol ads are allowed for this deal (read-only). This field is only populated when querying for finalized orders using the method GetFinalizedOrderDeals
        alcoholAdsAllowed?: boolean,
        // Tracks which parties (if any) have paused a deal. (readonly, except via PauseResumeOrderDeals action)
        dealPauseStatus?: DealServingMetadataDealPauseStatus,
    }
    
    interface DealServingMetadataDealPauseStatus {
        // 
        buyerPauseReason?: string,
        // If the deal is paused, records which party paused the deal first.
        firstPausedBy?: string,
        // 
        hasBuyerPaused?: boolean,
        // 
        hasSellerPaused?: boolean,
        // 
        sellerPauseReason?: string,
    }
    
    interface DealTerms {
        // Visibilty of the URL in bid requests.
        brandingType?: string,
        // Indicates that this ExternalDealId exists under at least two different AdxInventoryDeals. Currently, the only case that the same ExternalDealId will exist is programmatic cross sell case.
        crossListedExternalDealIdType?: string,
        // Description for the proposed terms of the deal.
        description?: string,
        // Non-binding estimate of the estimated gross spend for this deal Can be set by buyer or seller.
        estimatedGrossSpend?: Price,
        // Non-binding estimate of the impressions served per day Can be set by buyer or seller.
        estimatedImpressionsPerDay?: string,
        // The terms for guaranteed fixed price deals.
        guaranteedFixedPriceTerms?: DealTermsGuaranteedFixedPriceTerms,
        // The terms for non-guaranteed auction deals.
        nonGuaranteedAuctionTerms?: DealTermsNonGuaranteedAuctionTerms,
        // The terms for non-guaranteed fixed price deals.
        nonGuaranteedFixedPriceTerms?: DealTermsNonGuaranteedFixedPriceTerms,
        // The terms for rubicon non-guaranteed deals.
        rubiconNonGuaranteedTerms?: DealTermsRubiconNonGuaranteedTerms,
        // For deals with Cost Per Day billing, defines the timezone used to mark the boundaries of a day (buyer-readonly)
        sellerTimeZone?: string,
    }
    
    interface DealTermsGuaranteedFixedPriceTerms {
        // External billing info for this Deal. This field is relevant when external billing info such as price has a different currency code than DFP/AdX.
        billingInfo?: DealTermsGuaranteedFixedPriceTermsBillingInfo,
        // Fixed price for the specified buyer.
        fixedPrices?: PricePerBuyer[],        
        // Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy.
        guaranteedImpressions?: string,
        // Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored.
        guaranteedLooks?: string,
        // Count of minimum daily looks for a CPD deal. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks.
        minimumDailyLooks?: string,
    }
    
    interface DealTermsGuaranteedFixedPriceTermsBillingInfo {
        // The timestamp (in ms since epoch) when the original reservation price for the deal was first converted to DFP currency. This is used to convert the contracted price into buyer's currency without discrepancy.
        currencyConversionTimeMs?: string,
        // The DFP line item id associated with this deal. For features like CPD, buyers can retrieve the DFP line item for billing reconciliation.
        dfpLineItemId?: string,
        // The original contracted quantity (# impressions) for this deal. To ensure delivery, sometimes the publisher will book the deal with a impression buffer, such that guaranteed_looks is greater than the contracted quantity. However clients are billed using the original contracted quantity.
        originalContractedQuantity?: string,
        // The original reservation price for the deal, if the currency code is different from the one used in negotiation.
        price?: Price,
    }
    
    interface DealTermsNonGuaranteedAuctionTerms {
        // True if open auction buyers are allowed to compete with invited buyers in this private auction (buyer-readonly).
        autoOptimizePrivateAuction?: boolean,
        // Reserve price for the specified buyer.
        reservePricePerBuyers?: PricePerBuyer[],        
    }
    
    interface DealTermsNonGuaranteedFixedPriceTerms {
        // Fixed price for the specified buyer.
        fixedPrices?: PricePerBuyer[],        
    }
    
    interface DealTermsRubiconNonGuaranteedTerms {
        // Optional price for Rubicon priority access in the auction.
        priorityPrice?: Price,
        // Optional price for Rubicon standard access in the auction.
        standardPrice?: Price,
    }
    
    interface DeleteOrderDealsRequest {
        // List of deals to delete for a given proposal
        dealIds?: string[],        
        // The last known proposal revision number.
        proposalRevisionNumber?: string,
        // Indicates an optional action to take on the proposal
        updateAction?: string,
    }
    
    interface DeleteOrderDealsResponse {
        // List of deals deleted (in the same proposal as passed in the request)
        deals?: MarketplaceDeal[],        
        // The updated revision number for the proposal.
        proposalRevisionNumber?: string,
    }
    
    interface DeliveryControl {
        // 
        creativeBlockingLevel?: string,
        // 
        deliveryRateType?: string,
        // 
        frequencyCaps?: DeliveryControlFrequencyCap[],        
    }
    
    interface DeliveryControlFrequencyCap {
        // 
        maxImpressions?: number,
        // 
        numTimeUnits?: number,
        // 
        timeUnitType?: string,
    }
    
    interface Dimension {
        // 
        dimensionType?: string,
        // 
        dimensionValues?: DimensionDimensionValue[],        
    }
    
    interface DimensionDimensionValue {
        // Id of the dimension.
        id?: number,
        // Name of the dimension mainly for debugging purposes, except for the case of CREATIVE_SIZE. For CREATIVE_SIZE, strings are used instead of ids.
        name?: string,
        // Percent of total impressions for a dimension type. e.g. {dimension_type: 'GENDER', [{dimension_value: {id: 1, name: 'MALE', percentage: 60}}]} Gender MALE is 60% of all impressions which have gender.
        percentage?: number,
    }
    
    interface EditAllOrderDealsRequest {
        // List of deals to edit. Service may perform 3 different operations based on comparison of deals in this list vs deals already persisted in database: 1. Add new deal to proposal If a deal in this list does not exist in the proposal, the service will create a new deal and add it to the proposal. Validation will follow AddOrderDealsRequest. 2. Update existing deal in the proposal If a deal in this list already exist in the proposal, the service will update that existing deal to this new deal in the request. Validation will follow UpdateOrderDealsRequest. 3. Delete deals from the proposal (just need the id) If a existing deal in the proposal is not present in this list, the service will delete that deal from the proposal. Validation will follow DeleteOrderDealsRequest.
        deals?: MarketplaceDeal[],        
        // If specified, also updates the proposal in the batch transaction. This is useful when the proposal and the deals need to be updated in one transaction.
        proposal?: Proposal,
        // The last known revision number for the proposal.
        proposalRevisionNumber?: string,
        // Indicates an optional action to take on the proposal
        updateAction?: string,
    }
    
    interface EditAllOrderDealsResponse {
        // List of all deals in the proposal after edit.
        deals?: MarketplaceDeal[],        
        // The latest revision number after the update has been applied.
        orderRevisionNumber?: string,
    }
    
    interface GetOffersResponse {
        // The returned list of products.
        products?: Product[],        
    }
    
    interface GetOrderDealsResponse {
        // List of deals for the proposal
        deals?: MarketplaceDeal[],        
    }
    
    interface GetOrderNotesResponse {
        // The list of matching notes. The notes for a proposal are ordered from oldest to newest. If the notes span multiple proposals, they will be grouped by proposal, with the notes for the most recently modified proposal appearing first.
        notes?: MarketplaceNote[],        
    }
    
    interface GetOrdersResponse {
        // The list of matching proposals.
        proposals?: Proposal[],        
    }
    
    interface GetPublisherProfilesByAccountIdResponse {
        // Profiles for the requested publisher
        profiles?: PublisherProfileApiProto[],        
    }
    
    interface MarketplaceDeal {
        // Buyer private data (hidden from seller).
        buyerPrivateData?: PrivateData,
        // The time (ms since epoch) of the deal creation. (readonly)
        creationTimeMs?: string,
        // Specifies the creative pre-approval policy (buyer-readonly)
        creativePreApprovalPolicy?: string,
        // Specifies whether the creative is safeFrame compatible (buyer-readonly)
        creativeSafeFrameCompatibility?: string,
        // A unique deal-id for the deal (readonly).
        dealId?: string,
        // Metadata about the serving status of this deal (readonly, writes via custom actions)
        dealServingMetadata?: DealServingMetadata,
        // The set of fields around delivery control that are interesting for a buyer to see but are non-negotiable. These are set by the publisher. This message is assigned an id of 100 since some day we would want to model this as a protobuf extension.
        deliveryControl?: DeliveryControl,
        // The external deal id assigned to this deal once the deal is finalized. This is the deal-id that shows up in serving/reporting etc. (readonly)
        externalDealId?: string,
        // Proposed flight end time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)
        flightEndTimeMs?: string,
        // Proposed flight start time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)
        flightStartTimeMs?: string,
        // Description for the deal terms. (buyer-readonly)
        inventoryDescription?: string,
        // Indicates whether the current deal is a RFP template. RFP template is created by buyer and not based on seller created products.
        isRfpTemplate?: boolean,
        // True, if the buyside inventory setup is complete for this deal. (readonly, except via OrderSetupCompleted action)
        isSetupComplete?: boolean,
        // Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceDeal".
        kind?: string,
        // The time (ms since epoch) when the deal was last updated. (readonly)
        lastUpdateTimeMs?: string,
        // The name of the deal. (updatable)
        name?: string,
        // The product-id from which this deal was created. (readonly, except on create)
        productId?: string,
        // The revision number of the product that the deal was created from (readonly, except on create)
        productRevisionNumber?: string,
        // Specifies the creative source for programmatic deals, PUBLISHER means creative is provided by seller and ADVERTISR means creative is provided by buyer. (buyer-readonly)
        programmaticCreativeSource?: string,
        // 
        proposalId?: string,
        // Optional Seller contact information for the deal (buyer-readonly)
        sellerContacts?: ContactInformation[],        
        // The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together. (updatable)
        sharedTargetings?: SharedTargeting[],        
        // The syndication product associated with the deal. (readonly, except on create)
        syndicationProduct?: string,
        // The negotiable terms of the deal. (updatable)
        terms?: DealTerms,
        // 
        webPropertyCode?: string,
    }
    
    interface MarketplaceDealParty {
        // The buyer/seller associated with the deal. One of buyer/seller is specified for a deal-party.
        buyer?: Buyer,
        // The buyer/seller associated with the deal. One of buyer/seller is specified for a deal party.
        seller?: Seller,
    }
    
    interface MarketplaceLabel {
        // The accountId of the party that created the label.
        accountId?: string,
        // The creation time (in ms since epoch) for the label.
        createTimeMs?: string,
        // Information about the party that created the label.
        deprecatedMarketplaceDealParty?: MarketplaceDealParty,
        // The label to use.
        label?: string,
    }
    
    interface MarketplaceNote {
        // The role of the person (buyer/seller) creating the note. (readonly)
        creatorRole?: string,
        // Notes can optionally be associated with a deal. (readonly, except on create)
        dealId?: string,
        // Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceNote".
        kind?: string,
        // The actual note to attach. (readonly, except on create)
        note?: string,
        // The unique id for the note. (readonly)
        noteId?: string,
        // The proposalId that a note is attached to. (readonly)
        proposalId?: string,
        // If the note is associated with a proposal revision number, then store that here. (readonly, except on create)
        proposalRevisionNumber?: string,
        // The timestamp (ms since epoch) that this note was created. (readonly)
        timestampMs?: string,
    }
    
    interface PerformanceReport {
        // The number of bid responses with an ad.
        bidRate?: number,
        // The number of bid requests sent to your bidder.
        bidRequestRate?: number,
        // Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses.
        calloutStatusRate?: any[],        
        // Average QPS for cookie matcher operations.
        cookieMatcherStatusRate?: any[],        
        // Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses.
        creativeStatusRate?: any[],        
        // The number of bid responses that were filtered due to a policy violation or other errors.
        filteredBidRate?: number,
        // Average QPS for hosted match operations.
        hostedMatchStatusRate?: any[],        
        // The number of potential queries based on your pretargeting settings.
        inventoryMatchRate?: number,
        // Resource type.
        kind?: string,
        // The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
        latency50thPercentile?: number,
        // The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
        latency85thPercentile?: number,
        // The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.
        latency95thPercentile?: number,
        // Rate of various quota account statuses per quota check.
        noQuotaInRegion?: number,
        // Rate of various quota account statuses per quota check.
        outOfQuota?: number,
        // Average QPS for pixel match requests from clients.
        pixelMatchRequests?: number,
        // Average QPS for pixel match responses from clients.
        pixelMatchResponses?: number,
        // The configured quota limits for this account.
        quotaConfiguredLimit?: number,
        // The throttled quota limits for this account.
        quotaThrottledLimit?: number,
        // The trading location of this data.
        region?: string,
        // The number of properly formed bid responses received by our servers within the deadline.
        successfulRequestRate?: number,
        // The unix timestamp of the starting time of this performance data.
        timestamp?: string,
        // The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc.
        unsuccessfulRequestRate?: number,
    }
    
    interface PerformanceReportList {
        // Resource type.
        kind?: string,
        // A list of performance reports relevant for the account.
        performanceReport?: PerformanceReport[],        
    }
    
    interface PretargetingConfig {
        // The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.
        billingId?: string,
        // The config id; generated automatically. Leave this field blank for insert requests.
        configId?: string,
        // The name of the config. Must be unique. Required for all requests.
        configName?: string,
        // List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.
        creativeType?: string[],        
        // Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.
        dimensions?: {        
            // Height in pixels.
            height?: string,
            // Width in pixels.
            width?: string,
        }[],        
        // Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.
        excludedContentLabels?: string[],        
        // Requests containing any of these geo criteria ids will not match.
        excludedGeoCriteriaIds?: string[],        
        // Requests containing any of these placements will not match.
        excludedPlacements?: {        
            // The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.
            token?: string,
            // The type of the placement.
            type?: string,
        }[],        
        // Requests containing any of these users list ids will not match.
        excludedUserLists?: string[],        
        // Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.
        excludedVerticals?: string[],        
        // Requests containing any of these geo criteria ids will match.
        geoCriteriaIds?: string[],        
        // Whether this config is active. Required for all requests.
        isActive?: boolean,
        // The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig".
        kind?: string,
        // Request containing any of these language codes will match.
        languages?: string[],        
        // Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored.
        minimumViewabilityDecile?: number,
        // Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.
        mobileCarriers?: string[],        
        // Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.
        mobileDevices?: string[],        
        // Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.
        mobileOperatingSystemVersions?: string[],        
        // Requests containing any of these placements will match.
        placements?: {        
            // The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.
            token?: string,
            // The type of the placement.
            type?: string,
        }[],        
        // Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.
        platforms?: string[],        
        // Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.
        supportedCreativeAttributes?: string[],        
        // Requests containing the specified type of user data will match. Possible values are HOSTED_MATCH_DATA, which means the request is cookie-targetable and has a match in the buyer's hosted match table, and COOKIE_OR_IDFA, which means the request has either a targetable cookie or an iOS IDFA.
        userIdentifierDataRequired?: string[],        
        // Requests containing any of these user list ids will match.
        userLists?: string[],        
        // Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.
        vendorTypes?: string[],        
        // Requests containing any of these vertical ids will match.
        verticals?: string[],        
        // Video requests satisfying any of these player size constraints will match.
        videoPlayerSizes?: {        
            // The type of aspect ratio. Leave this field blank to match all aspect ratios.
            aspectRatio?: string,
            // The minimum player height in pixels. Leave this field blank to match any player height.
            minHeight?: string,
            // The minimum player width in pixels. Leave this field blank to match any player width.
            minWidth?: string,
        }[],        
    }
    
    interface PretargetingConfigList {
        // A list of pretargeting configs
        items?: PretargetingConfig[],        
        // Resource type.
        kind?: string,
    }
    
    interface Price {
        // The price value in micros.
        amountMicros?: number,
        // The currency code for the price.
        currencyCode?: string,
        // In case of CPD deals, the expected CPM in micros.
        expectedCpmMicros?: number,
        // The pricing type for the deal/product.
        pricingType?: string,
    }
    
    interface PricePerBuyer {
        // Optional access type for this buyer.
        auctionTier?: string,
        // Reference to the buyer that will get billed.
        billedBuyer?: Buyer,
        // The buyer who will pay this price. If unset, all buyers can pay this price (if the advertisers match, and there's no more specific rule matching the buyer).
        buyer?: Buyer,
        // The specified price
        price?: Price,
    }
    
    interface PrivateData {
        // 
        referenceId?: string,
        // 
        referencePayload?: string,
    }
    
    interface Product {
        // The billed buyer corresponding to the buyer that created the offer. (readonly, except on create)
        billedBuyer?: Buyer,
        // The buyer that created the offer if this is a buyer initiated offer (readonly, except on create)
        buyer?: Buyer,
        // Creation time in ms. since epoch (readonly)
        creationTimeMs?: string,
        // Optional contact information for the creator of this product. (buyer-readonly)
        creatorContacts?: ContactInformation[],        
        // The role that created the offer. Set to BUYER for buyer initiated offers.
        creatorRole?: string,
        // The set of fields around delivery control that are interesting for a buyer to see but are non-negotiable. These are set by the publisher. This message is assigned an id of 100 since some day we would want to model this as a protobuf extension.
        deliveryControl?: DeliveryControl,
        // The proposed end time for the deal (ms since epoch) (buyer-readonly)
        flightEndTimeMs?: string,
        // Inventory availability dates. (times are in ms since epoch) The granularity is generally in the order of seconds. (buyer-readonly)
        flightStartTimeMs?: string,
        // If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false.
        hasCreatorSignedOff?: boolean,
        // What exchange will provide this inventory (readonly, except on create).
        inventorySource?: string,
        // Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#product".
        kind?: string,
        // Optional List of labels for the product (optional, buyer-readonly).
        labels?: MarketplaceLabel[],        
        // Time of last update in ms. since epoch (readonly)
        lastUpdateTimeMs?: string,
        // Optional legacy offer id if this offer is a preferred deal offer.
        legacyOfferId?: string,
        // Marketplace publisher profile Id. This Id differs from the regular publisher_profile_id in that 1. This is a new id, the old Id will be deprecated in 2017. 2. This id uniquely identifies a publisher profile by itself.
        marketplacePublisherProfileId?: string,
        // The name for this product as set by the seller. (buyer-readonly)
        name?: string,
        // Optional private auction id if this offer is a private auction offer.
        privateAuctionId?: string,
        // The unique id for the product (readonly)
        productId?: string,
        // Id of the publisher profile for a given seller. A (seller.account_id, publisher_profile_id) pair uniquely identifies a publisher profile. Buyers can call the PublisherProfiles::List endpoint to get a list of publisher profiles for a given seller.
        publisherProfileId?: string,
        // Publisher self-provided forecast information.
        publisherProvidedForecast?: PublisherProvidedForecast,
        // The revision number of the product. (readonly)
        revisionNumber?: string,
        // Information about the seller that created this product (readonly, except on create)
        seller?: Seller,
        // Targeting that is shared between the buyer and the seller. Each targeting criteria has a specified key and for each key there is a list of inclusion value or exclusion values. (buyer-readonly)
        sharedTargetings?: SharedTargeting[],        
        // The state of the product. (buyer-readonly)
        state?: string,
        // The syndication product associated with the deal. (readonly, except on create)
        syndicationProduct?: string,
        // The negotiable terms of the deal (buyer-readonly)
        terms?: DealTerms,
        // The web property code for the seller. This field is meant to be copied over as is when creating deals.
        webPropertyCode?: string,
    }
    
    interface Proposal {
        // Reference to the buyer that will get billed for this proposal. (readonly)
        billedBuyer?: Buyer,
        // Reference to the buyer on the proposal. (readonly, except on create)
        buyer?: Buyer,
        // Optional contact information of the buyer. (seller-readonly)
        buyerContacts?: ContactInformation[],        
        // Private data for buyer. (hidden from seller).
        buyerPrivateData?: PrivateData,
        // IDs of DBM advertisers permission to this proposal.
        dbmAdvertiserIds?: string[],        
        // When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly)
        hasBuyerSignedOff?: boolean,
        // When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly)
        hasSellerSignedOff?: boolean,
        // What exchange will provide this inventory (readonly, except on create).
        inventorySource?: string,
        // True if the proposal is being renegotiated (readonly).
        isRenegotiating?: boolean,
        // True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag.
        isSetupComplete?: boolean,
        // Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#proposal".
        kind?: string,
        // List of labels associated with the proposal. (readonly)
        labels?: MarketplaceLabel[],        
        // The role of the last user that either updated the proposal or left a comment. (readonly)
        lastUpdaterOrCommentorRole?: string,
        // The name for the proposal (updatable)
        name?: string,
        // Optional negotiation id if this proposal is a preferred deal proposal.
        negotiationId?: string,
        // Indicates whether the buyer/seller created the proposal.(readonly)
        originatorRole?: string,
        // Optional private auction id if this proposal is a private auction proposal.
        privateAuctionId?: string,
        // The unique id of the proposal. (readonly).
        proposalId?: string,
        // The current state of the proposal. (readonly)
        proposalState?: string,
        // The revision number for the proposal (readonly).
        revisionNumber?: string,
        // The time (ms since epoch) when the proposal was last revised (readonly).
        revisionTimeMs?: string,
        // Reference to the seller on the proposal. (readonly, except on create)
        seller?: Seller,
        // Optional contact information of the seller (buyer-readonly).
        sellerContacts?: ContactInformation[],        
    }
    
    interface PublisherProfileApiProto {
        // The account id of the seller.
        accountId?: string,
        // Publisher provided info on its audience.
        audience?: string,
        // A pitch statement for the buyer
        buyerPitchStatement?: string,
        // Direct contact for the publisher profile.
        directContact?: string,
        // Exchange where this publisher profile is from. E.g. AdX, Rubicon etc...
        exchange?: string,
        // Link to publisher's Google+ page.
        googlePlusLink?: string,
        // True, if this is the parent profile, which represents all domains owned by the publisher.
        isParent?: boolean,
        // True, if this profile is published. Deprecated for state.
        isPublished?: boolean,
        // Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#publisherProfileApiProto".
        kind?: string,
        // The url to the logo for the publisher.
        logoUrl?: string,
        // The url for additional marketing and sales materials.
        mediaKitLink?: string,
        // 
        name?: string,
        // Publisher provided overview.
        overview?: string,
        // The pair of (seller.account_id, profile_id) uniquely identifies a publisher profile for a given publisher.
        profileId?: number,
        // Programmatic contact for the publisher profile.
        programmaticContact?: string,
        // The list of domains represented in this publisher profile. Empty if this is a parent profile.
        publisherDomains?: string[],        
        // Unique Id for publisher profile.
        publisherProfileId?: string,
        // Publisher provided forecasting information.
        publisherProvidedForecast?: PublisherProvidedForecast,
        // Link to publisher rate card
        rateCardInfoLink?: string,
        // Link for a sample content page.
        samplePageLink?: string,
        // Seller of the publisher profile.
        seller?: Seller,
        // State of the publisher profile.
        state?: string,
        // Publisher provided key metrics and rankings.
        topHeadlines?: string[],        
    }
    
    interface PublisherProvidedForecast {
        // Publisher provided dimensions. E.g. geo, sizes etc...
        dimensions?: Dimension[],        
        // Publisher provided weekly impressions.
        weeklyImpressions?: string,
        // Publisher provided weekly uniques.
        weeklyUniques?: string,
    }
    
    interface Seller {
        // The unique id for the seller. The seller fills in this field. The seller account id is then available to buyer in the product.
        accountId?: string,
        // Optional sub-account id for the seller.
        subAccountId?: string,
    }
    
    interface SharedTargeting {
        // The list of values to exclude from targeting. Each value is AND'd together.
        exclusions?: TargetingValue[],        
        // The list of value to include as part of the targeting. Each value is OR'd together.
        inclusions?: TargetingValue[],        
        // The key representing the shared targeting criterion.
        key?: string,
    }
    
    interface TargetingValue {
        // The creative size value to exclude/include.
        creativeSizeValue?: TargetingValueCreativeSize,
        // The daypart targeting to include / exclude. Filled in when the key is GOOG_DAYPART_TARGETING.
        dayPartTargetingValue?: TargetingValueDayPartTargeting,
        // The long value to exclude/include.
        longValue?: string,
        // The string value to exclude/include.
        stringValue?: string,
    }
    
    interface TargetingValueCreativeSize {
        // For video size type, the list of companion sizes.
        companionSizes?: TargetingValueSize[],        
        // The Creative size type.
        creativeSizeType?: string,
        // The native template for native ad.
        nativeTemplate?: string,
        // For regular or video creative size type, specifies the size of the creative.
        size?: TargetingValueSize,
        // The skippable ad type for video size.
        skippableAdType?: string,
    }
    
    interface TargetingValueDayPartTargeting {
        // 
        dayParts?: TargetingValueDayPartTargetingDayPart[],        
        // 
        timeZoneType?: string,
    }
    
    interface TargetingValueDayPartTargetingDayPart {
        // 
        dayOfWeek?: string,
        // 
        endHour?: number,
        // 
        endMinute?: number,
        // 
        startHour?: number,
        // 
        startMinute?: number,
    }
    
    interface TargetingValueSize {
        // The height of the creative.
        height?: number,
        // The width of the creative.
        width?: number,
    }
    
    interface UpdatePrivateAuctionProposalRequest {
        // The externalDealId of the deal to be updated.
        externalDealId?: string,
        // Optional note to be added.
        note?: MarketplaceNote,
        // The current revision number of the proposal to be updated.
        proposalRevisionNumber?: string,
        // The proposed action on the private auction proposal.
        updateAction?: string,
    }
    
    interface AccountsResource {
        // Gets one account by ID.
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
            // The account id
            id: number,
        }) : gapi.client.Request<Account>;        
        
        // Retrieves the authenticated user's list of accounts.
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
        }) : gapi.client.Request<AccountsList>;        
        
        // Updates an existing account. This method supports patch semantics.
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
            // Confirmation for erasing bidder and cookie matching urls.
            confirmUnsafeAccountChange?: boolean,
            // The account id
            id: number,
        }) : gapi.client.Request<Account>;        
        
        // Updates an existing account.
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
            // Confirmation for erasing bidder and cookie matching urls.
            confirmUnsafeAccountChange?: boolean,
            // The account id
            id: number,
        }) : gapi.client.Request<Account>;        
        
    }
    
    
    interface BillingInfoResource {
        // Returns the billing information for one account specified by account ID.
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
            // The account id.
            accountId: number,
        }) : gapi.client.Request<BillingInfo>;        
        
        // Retrieves a list of billing information for all accounts of the authenticated user.
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
        }) : gapi.client.Request<BillingInfoList>;        
        
    }
    
    
    interface BudgetResource {
        // Returns the budget information for the adgroup specified by the accountId and billingId.
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
            // The account id to get the budget information for.
            accountId: string,
            // The billing id to get the budget information for.
            billingId: string,
        }) : gapi.client.Request<Budget>;        
        
        // Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
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
            // The account id associated with the budget being updated.
            accountId: string,
            // The billing id associated with the budget being updated.
            billingId: string,
        }) : gapi.client.Request<Budget>;        
        
        // Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.
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
            // The account id associated with the budget being updated.
            accountId: string,
            // The billing id associated with the budget being updated.
            billingId: string,
        }) : gapi.client.Request<Budget>;        
        
    }
    
    
    interface CreativesResource {
        // Add a deal id association for the creative.
        addDeal (request: {        
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
            // The id for the account that will serve this creative.
            accountId: number,
            // The buyer-specific id for this creative.
            buyerCreativeId: string,
            // The id of the deal id to associate with this creative.
            dealId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
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
            // The id for the account that will serve this creative.
            accountId: number,
            // The buyer-specific id for this creative.
            buyerCreativeId: string,
        }) : gapi.client.Request<Creative>;        
        
        // Submit a new creative.
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
        }) : gapi.client.Request<Creative>;        
        
        // Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
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
            // When specified, only creatives for the given account ids are returned.
            accountId?: number,
            // When specified, only creatives for the given buyer creative ids are returned.
            buyerCreativeId?: string,
            // When specified, only creatives having the given deals status are returned.
            dealsStatusFilter?: string,
            // Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
            maxResults?: number,
            // When specified, only creatives having the given open auction status are returned.
            openAuctionStatusFilter?: string,
            // A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
            pageToken?: string,
        }) : gapi.client.Request<CreativesList>;        
        
        // Lists the external deal ids associated with the creative.
        listDeals (request: {        
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
            // The id for the account that will serve this creative.
            accountId: number,
            // The buyer-specific id for this creative.
            buyerCreativeId: string,
        }) : gapi.client.Request<CreativeDealIds>;        
        
        // Remove a deal id associated with the creative.
        removeDeal (request: {        
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
            // The id for the account that will serve this creative.
            accountId: number,
            // The buyer-specific id for this creative.
            buyerCreativeId: string,
            // The id of the deal id to disassociate with this creative.
            dealId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface MarketplacedealsResource {
        // Delete the specified deals from the proposal
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
            // The proposalId to delete deals from.
            proposalId: string,
        }) : gapi.client.Request<DeleteOrderDealsResponse>;        
        
        // Add new deals for the specified proposal
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
            // proposalId for which deals need to be added.
            proposalId: string,
        }) : gapi.client.Request<AddOrderDealsResponse>;        
        
        // List all the deals for a given proposal
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
            // Query string to retrieve specific deals.
            pqlQuery?: string,
            // The proposalId to get deals for. To search across all proposals specify order_id = '-' as part of the URL.
            proposalId: string,
        }) : gapi.client.Request<GetOrderDealsResponse>;        
        
        // Replaces all the deals in the proposal with the passed in deals
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
            // The proposalId to edit deals on.
            proposalId: string,
        }) : gapi.client.Request<EditAllOrderDealsResponse>;        
        
    }
    
    
    interface MarketplacenotesResource {
        // Add notes to the proposal
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
            // The proposalId to add notes for.
            proposalId: string,
        }) : gapi.client.Request<AddOrderNotesResponse>;        
        
        // Get all the notes associated with a proposal
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
            // Query string to retrieve specific notes. To search the text contents of notes, please use syntax like "WHERE note.note = "foo" or "WHERE note.note LIKE "%bar%"
            pqlQuery?: string,
            // The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.
            proposalId: string,
        }) : gapi.client.Request<GetOrderNotesResponse>;        
        
    }
    
    
    interface MarketplaceprivateauctionResource {
        // Update a given private auction proposal
        updateproposal (request: {        
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
            // The private auction id to be updated.
            privateAuctionId: string,
        }) : gapi.client.Request<void>;        
        
    }
    
    
    interface PerformanceReportResource {
        // Retrieves the authenticated user's list of performance metrics.
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
            // The account id to get the reports.
            accountId: string,
            // The end time of the report in ISO 8601 timestamp format using UTC.
            endDateTime: string,
            // Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
            maxResults?: number,
            // A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
            pageToken?: string,
            // The start time of the report in ISO 8601 timestamp format using UTC.
            startDateTime: string,
        }) : gapi.client.Request<PerformanceReportList>;        
        
    }
    
    
    interface PretargetingConfigResource {
        // Deletes an existing pretargeting config.
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
            // The account id to delete the pretargeting config for.
            accountId: string,
            // The specific id of the configuration to delete.
            configId: string,
        }) : gapi.client.Request<void>;        
        
        // Gets a specific pretargeting configuration
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
            // The account id to get the pretargeting config for.
            accountId: string,
            // The specific id of the configuration to retrieve.
            configId: string,
        }) : gapi.client.Request<PretargetingConfig>;        
        
        // Inserts a new pretargeting configuration.
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
            // The account id to insert the pretargeting config for.
            accountId: string,
        }) : gapi.client.Request<PretargetingConfig>;        
        
        // Retrieves a list of the authenticated user's pretargeting configurations.
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
            // The account id to get the pretargeting configs for.
            accountId: string,
        }) : gapi.client.Request<PretargetingConfigList>;        
        
        // Updates an existing pretargeting config. This method supports patch semantics.
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
            // The account id to update the pretargeting config for.
            accountId: string,
            // The specific id of the configuration to update.
            configId: string,
        }) : gapi.client.Request<PretargetingConfig>;        
        
        // Updates an existing pretargeting config.
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
            // The account id to update the pretargeting config for.
            accountId: string,
            // The specific id of the configuration to update.
            configId: string,
        }) : gapi.client.Request<PretargetingConfig>;        
        
    }
    
    
    interface ProductsResource {
        // Gets the requested product by id.
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
            // The id for the product to get the head revision for.
            productId: string,
        }) : gapi.client.Request<Product>;        
        
        // Gets the requested product.
        search (request: {        
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
            // The pql query used to query for products.
            pqlQuery?: string,
        }) : gapi.client.Request<GetOffersResponse>;        
        
    }
    
    
    interface ProposalsResource {
        // Get a proposal given its id
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
            // Id of the proposal to retrieve.
            proposalId: string,
        }) : gapi.client.Request<Proposal>;        
        
        // Create the given list of proposals
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
        }) : gapi.client.Request<CreateOrdersResponse>;        
        
        // Update the given proposal. This method supports patch semantics.
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
            // The proposal id to update.
            proposalId: string,
            // The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
            revisionNumber: string,
            // The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
            updateAction: string,
        }) : gapi.client.Request<Proposal>;        
        
        // Search for proposals using pql query
        search (request: {        
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
            // Query string to retrieve specific proposals.
            pqlQuery?: string,
        }) : gapi.client.Request<GetOrdersResponse>;        
        
        // Update the given proposal to indicate that setup has been completed.
        setupcomplete (request: {        
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
            // The proposal id for which the setup is complete
            proposalId: string,
        }) : gapi.client.Request<void>;        
        
        // Update the given proposal
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
            // The proposal id to update.
            proposalId: string,
            // The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.
            revisionNumber: string,
            // The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.
            updateAction: string,
        }) : gapi.client.Request<Proposal>;        
        
    }
    
    
    interface PubprofilesResource {
        // Gets the requested publisher profile(s) by publisher accountId.
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
            // The accountId of the publisher to get profiles for.
            accountId: number,
        }) : gapi.client.Request<GetPublisherProfilesByAccountIdResponse>;        
        
    }
    
}

declare module gapi.client.adexchangebuyer {
    var accounts: gapi.client.adexchangebuyer.AccountsResource; 
    
    var billingInfo: gapi.client.adexchangebuyer.BillingInfoResource; 
    
    var budget: gapi.client.adexchangebuyer.BudgetResource; 
    
    var creatives: gapi.client.adexchangebuyer.CreativesResource; 
    
    var marketplacedeals: gapi.client.adexchangebuyer.MarketplacedealsResource; 
    
    var marketplacenotes: gapi.client.adexchangebuyer.MarketplacenotesResource; 
    
    var marketplaceprivateauction: gapi.client.adexchangebuyer.MarketplaceprivateauctionResource; 
    
    var performanceReport: gapi.client.adexchangebuyer.PerformanceReportResource; 
    
    var pretargetingConfig: gapi.client.adexchangebuyer.PretargetingConfigResource; 
    
    var products: gapi.client.adexchangebuyer.ProductsResource; 
    
    var proposals: gapi.client.adexchangebuyer.ProposalsResource; 
    
    var pubprofiles: gapi.client.adexchangebuyer.PubprofilesResource; 
    
}
