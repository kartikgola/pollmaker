# Pollmaker

User module - Lazy loaded - because user can vote without login
    creation form
    list of created polls
    poll modification page

Core module ( prevents re-init of global services by lazy-loaded modules )
    - Contains core services (app-wide)
    - providedIn

Polls module
    poll list
        - contains list of all available polls
    poll item
        - represents list or tile UI
    poll detail
        - contains info of a single poll