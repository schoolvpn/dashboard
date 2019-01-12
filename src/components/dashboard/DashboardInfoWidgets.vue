<template>
  <div>
    <h1>OpenVPN:</h1>
    <div class="row dashboard-info-widgets">
        <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="ion ion-md-arrow-up text-primary stats-icon"></i>
                0 MB
              </div>
              <div class="stats-title">{{'Upload' | translate}}</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="ion ion-md-arrow-down text-danger stats-icon"></i>
                0 MB
              </div>
              <div class="stats-title">{{'Download' | translate}}</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget brand-success">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="ion ion-ios-link stats-icon icon-wide"></i>
                0
              </div>
              <div class="stats-title">{{'Connection Attempts' | translate}}</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget brand-info">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="ion ion-md-people stats-icon icon-wide"></i>
                0
              </div>
              <div class="stats-title">{{'Active Users' | translate}}</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <h1>IPSEC VPN:</h1>
    <div class="row dashboard-info-widgets">
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="ion ion-md-arrow-up text-primary stats-icon"></i>
                0 MB
              </div>
              <div class="stats-title">{{'Upload' | translate}}</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="ion ion-md-arrow-down text-danger stats-icon"></i>
                0 MB
              </div>
              <div class="stats-title">{{'Download' | translate}}</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget brand-success">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="ion ion-ios-link stats-icon icon-wide"></i>
                0
              </div>
              <div class="stats-title">{{'Connection Attempts' | translate}}</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
      <div class="col-md-6 col-xl-3">
        <vuestic-widget class="info-widget brand-info">
          <div class="info-widget-inner">
            <div class="stats">
              <div class="stats-number">
                <i class="ion ion-md-people stats-icon icon-wide"></i>
                0
              </div>
              <div class="stats-title">{{'Active Users' | translate}}</div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard-info-widgets'
}
</script>

<style lang="scss" scoped>
  .stats-number, .stats-title {
    line-height: 1;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }

</style>
